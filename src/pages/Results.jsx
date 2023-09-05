export default function Results({ videos }) {
    return (
        <div className="results">
            {videos?.map((video, index) => (
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
            ))}
        </div>
    );
};