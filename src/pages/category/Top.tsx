import classNames from "classnames";
import {useState} from "react";
import {GridType, SearchEnum} from "../../enums/CategoryItemTitle.ts";

const Top = ({setSearch, search, gridType, setGridType}: {
    search: SearchEnum,
    setSearch: (search: SearchEnum) => void,
    gridType: GridType,
    setGridType: (gridType: GridType) => void
}) => {
    const [filters] = useState([
        {
            id: 1,
            title: "New",
            value: SearchEnum.NEW
        }, {
            id: 2,
            title: "Trendy",
            value: SearchEnum.TRENDY
        }, {
            id: 3,
            title: "Popular",
            value: SearchEnum.POPULAR
        }, {
            id: 4,
            title: "Top",
            value: SearchEnum.TOP
        }
    ]);
    const [gridTypes] = useState([
        {
            id: 1,
            icon: <svg
                width="16"
                height="14"
                viewBox="0 0 16 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M0.5 2C0.5 1.1875 1.15625 0.5 2 0.5C2.8125 0.5 3.5 1.1875 3.5 2C3.5 2.84375 2.8125 3.5 2 3.5C1.15625 3.5 0.5 2.84375 0.5 2ZM15 1C15.5312 1 16 1.46875 16 2C16 2.5625 15.5312 3 15 3H6C5.4375 3 5 2.5625 5 2C5 1.46875 5.4375 1 6 1H15ZM15 6C15.5312 6 16 6.46875 16 7C16 7.5625 15.5312 8 15 8H6C5.4375 8 5 7.5625 5 7C5 6.46875 5.4375 6 6 6H15ZM15 11C15.5312 11 16 11.4688 16 12C16 12.5625 15.5312 13 15 13H6C5.4375 13 5 12.5625 5 12C5 11.4688 5.4375 11 6 11H15ZM0.5 12C0.5 11.1875 1.15625 10.5 2 10.5C2.8125 10.5 3.5 11.1875 3.5 12C3.5 12.8438 2.8125 13.5 2 13.5C1.15625 13.5 0.5 12.8438 0.5 12ZM3.5 7C3.5 7.84375 2.8125 8.5 2 8.5C1.15625 8.5 0.5 7.84375 0.5 7C0.5 6.1875 1.15625 5.5 2 5.5C2.8125 5.5 3.5 6.1875 3.5 7Z"
                    fill="#3E3232"
                />
            </svg>,
            value: GridType.LIST
        }, {
            id: 2,
            icon: <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle cx="12" cy="2" r="1.5" fill="#3E3232"/>
                <circle cx="7" cy="2" r="1.5" fill="#3E3232"/>
                <circle cx="2" cy="2" r="1.5" fill="#3E3232"/>
                <circle cx="12" cy="12" r="1.5" fill="#3E3232"/>
                <circle cx="7" cy="12" r="1.5" fill="#3E3232"/>
                <circle cx="2" cy="12" r="1.5" fill="#3E3232"/>
                <circle cx="12" cy="7" r="1.5" fill="#3E3232"/>
                <circle cx="7" cy="7" r="1.5" fill="#3E3232"/>
                <circle cx="2" cy="7" r="1.5" fill="#3E3232"/>
            </svg>,
            value: GridType.GRID
        }
    ])

    return (
        <>
            <div
                className={"bg-[#F5F5F5] p-[10px] my-[45px] px-[20px] rounded-[12px]"}
            >
                <div className={"flex justify-between items-center"}>
                    <div className={"flex gap-[20px]"}>
                        {filters.map((filter) => (<>
                            <p
                                key={filter.id}
                                onClick={() => setSearch(filter.value)}
                                className={
                                    classNames("capitalize text-[#3E3232BF] cursor-pointer font-medium",
                                        {"text-[#F81539]": filter.value === search})}>
                                {filter.title}
                            </p>
                        </>))
                        }
                    </div>
                    <div className={"flex gap-[10px] items-center"}>
                        {gridTypes.map((grid) => (<>
                            <div
                                onClick={() => setGridType(grid.value)}
                                key={grid.id}
                                className={classNames("cursor-pointer", {"bg-[#3E32320D] p-2 rounded-[12px]": grid.value === gridType})}>
                                {grid.icon}
                            </div>
                        </>))
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default Top;