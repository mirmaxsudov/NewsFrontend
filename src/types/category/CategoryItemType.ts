import CategoryItemTitle from "../../enums/CategoryItemTitle.ts";

type CategoryItemType = {
    name: CategoryItemTitle,
    image: string,
    link: string
}

type CategoryItemProps = {
    name: CategoryItemTitle
    image: string,
    link: string
}

export default CategoryItemType;
export type {CategoryItemProps}