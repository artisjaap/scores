package be.dev.scores.rest.mappers;

import java.util.List;

public interface ViewMapper {
    <FROM, TO> TO map(FROM from, Class<TO> toType);

    <FROM, TO> List<TO> map(List<FROM> froms, Class<TO> toType);
}
