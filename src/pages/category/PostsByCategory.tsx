import {useState} from "react";
import {useParams} from "react-router-dom";
import GenerateBreadCrumbs from "../../helpers/GenerateBreadCrumbs.tsx";
import Top from "./Top.tsx";
import {GridType, SearchEnum} from "../../enums/CategoryItemTitle.ts";

const PostsByCategory = () => {
    const params = useParams();
    const [search, setSearch] = useState<SearchEnum>(SearchEnum.NEW);
    const [gridType, setGridType] = useState<GridType>(GridType.GRID);

    return (
        <>
            <section>
                <div className={"container max-w-container mx-auto"}>
                    <GenerateBreadCrumbs
                        values={[
                            {
                                value: "home",
                                link: "/",
                            },
                            {
                                value: params["category"] ?? "",
                                link: `/category/${params["category"]}`,
                            },
                        ]}
                        current={params["category"] ?? ""}
                    />
                    <Top search={search} setSearch={setSearch} setGridType={setGridType} gridType={gridType}/>
                </div>
            </section>
        </>
    );
};

export default PostsByCategory;
