package be.dev.scores.rest.mappers;

import org.springframework.aop.framework.Advised;
import org.springframework.stereotype.Component;

import java.lang.reflect.ParameterizedType;
import java.lang.reflect.Type;
import java.util.List;
import java.util.Map;
import java.util.function.Function;
import java.util.stream.Stream;

import static java.util.stream.Collectors.joining;
import static java.util.stream.Collectors.toList;
import static java.util.stream.Collectors.toMap;

@Component
public class DefaultViewMapper implements ViewMapper {

    private final Map<String, Mapper> mappers;

    public DefaultViewMapper(Mapper... mappers) {
        this.mappers = Stream.of(mappers).collect(toMap(this::mapperKey, Function.identity()));
    }

    private String mapperKey(Mapper mapper) {
        Class<? extends Mapper> listenerClass = advised(mapper);
        return Stream.of(listenerClass.getGenericInterfaces())
                .filter(type -> type instanceof ParameterizedType)
                .map(ParameterizedType.class::cast)
                .map(ParameterizedType::getActualTypeArguments)
                .flatMap(Stream::of)
                .map(Type::getTypeName)
                .collect(joining(","));
    }

    private Class<? extends Mapper> advised(Mapper listener) {
        return listener instanceof Advised ? (Class<? extends Mapper>) ((Advised) listener).getTargetSource().getTargetClass() : listener.getClass();
    }

    @Override
    public <FROM, TO> TO map(FROM from, Class<TO> toType) {
        return (TO) mappers.computeIfAbsent(
                Stream.of(from.getClass(), toType).map(Class::getName).collect(joining(",")),
                mapper -> {
                    throw new IllegalStateException(String.format("No Mapper found from %s, to %s", from.getClass().getName(), toType.getName()));
                }
        ).map(from);
    }

    @Override
    public <FROM, TO> List<TO> map(List<FROM> froms, Class<TO> toType) {
        return froms.stream().map(from -> map(from, toType)).collect(toList());
    }
}
