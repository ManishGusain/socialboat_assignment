import { useEffect, useState } from "react";

export default function Results({ videos }) {
    const [tagData, setTagData] = useState({
        tags: [],
        filterTag: [],
    });

    const handleInput = (e, val) => {
        const { checked } = e.target;
        if (checked) {
            setTagData((prev) => ({ ...prev, filterTag: [...prev.filterTag, val] }));
        } else {
            setTagData((prev) => ({
                ...prev,
                filterTag: prev.filterTag.filter((tag) => tag !== val),
            }));
        }
    };

    const tags_func = () => {
        const uniqueTags = new Set();

        videos?.forEach((value) => {
            value?.tags?.forEach((tag) => {
                uniqueTags.add(tag);
            });
        });

        const uniqueTagsArr = Array.from(uniqueTags);

        setTagData((prev) => ({ ...prev, tags: uniqueTagsArr }));
    };

    useEffect(() => {
        tags_func();
    }, [videos]);

    return (
        <>

            {/* tags filter */}
            <div className="tags-container">
                {tagData?.tags?.map((val, ind) => {
                    return (
                        <div className="tags-wrapper" key={ind}>
                            <input type="checkbox" onClick={(e) => handleInput(e, val)} />
                            <span>{val}</span>
                        </div>
                    );
                })}
            </div>

            {/* video cards */}
            <div className="results">

                {videos
                    ?.filter(video => {
                        return video?.tags?.some(tagFilter => tagData?.filterTag?.includes(tagFilter));
                    })
                    ?.map((video, index) => {
                        return (
                            <div className="video-card" key={index}>
                                <h2>{video?.heading}</h2>
                                <div className="video-container">
                                    <video controls className="video">
                                        <source src={video?.video} type="video/mp4" />
                                    </video>
                                </div>
                                <div className="tags">
                                    {video?.tags?.map((tag, tagIndex) => (
                                        <span key={tagIndex}>{tag}</span>
                                    ))}
                                </div>
                            </div>
                        );
                    })}

            </div>
        </>
    );
};