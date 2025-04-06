import React from "react";
import CategoryItemType from "../../types/category/CategoryItemType.ts";
import CategoryItem from "./CategoryItem.tsx";
import CategoryItemTitle from "../../enums/CategoryItemTitle.ts";

const Category: React.FC = () => {
    const CategoryItems: CategoryItemType[] = [
        {
            name: CategoryItemTitle.FOOD,
            link: "/",
            image: "/public/images/category/food.png"
        },
        {
            name: CategoryItemTitle.ANIMAL,
            link: "/",
            image: "/public/images/category/animal.png"
        },
        {
            name: CategoryItemTitle.CAR,
            link: "/",
            image: "/public/images/category/car.png"
        },
        {
            name: CategoryItemTitle.SPORT,
            link: "/",
            image: "/public/images/category/sport.png"
        },
        {
            name: CategoryItemTitle.MUSIC,
            link: "/",
            image: "/public/images/category/music.png"
        },
        {
            name: CategoryItemTitle.TECHNOLOGY,
            link: "/",
            image: "/public/images/category/technology.png"
        },
        {
            name: CategoryItemTitle.ABSTRACT,
            link: "/",
            image: "/public/images/category/abstract.png"
        }
    ]

    return (
        <section className={"category__section my-[50px]"}>
            <div className={"container max-w-container mx-auto"}>
                <div className={"category__wrapper overflow-auto flex gap-[34px]"}>
                    {
                        CategoryItems.map((item, index) => {
                            return (
                                <CategoryItem
                                    key={index}
                                    name={item.name}
                                    link={item.link}
                                    image={item.image}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </section>
    );
};

export default Category;