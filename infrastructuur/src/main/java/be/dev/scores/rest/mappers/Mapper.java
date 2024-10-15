package be.dev.scores.rest.mappers;

import java.util.List;
import java.util.stream.Collectors;

public interface Mapper<FROM, TO> {
    TO map(FROM from);

    default List<TO> mapList(List<FROM> fromList) {
        return fromList.stream().map(this::map).collect(Collectors.toList());
    }
}
