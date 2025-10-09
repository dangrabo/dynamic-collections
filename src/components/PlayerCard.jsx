import Stats from "./stats.jsx";

function PlayerCard(data) {
  return (
    <>
      <div className="container">
        <div className="name-rating">
          <h3 className="player-name">{data.name}</h3>
          <h3 className="player-rating">{data.overallRating}</h3>
        </div>
        <div className="pictures">
          <img
            src={encodeURI(data.photo)}
            alt={`${data.name}-image`}
            className="player-img"
          />
          <div className="team-country">
            <img
              src={encodeURI(data.teamLogo)}
              alt={`${data.club}-logo`}
              className="club-img"
            />
            <img
              src={encodeURI(data.nationalityFlag)}
              alt={`${data.nationality}-flag`}
              className="nation-img"
            />
          </div>
        </div>
        <div className="position-c">
          <p>{data.position}</p>
          <p className={data.isCaptain ? "captain" : ""}>{data.isCaptain && "C"}</p>
        </div>

        <Stats {...data.stats} />
      </div>
    </>
  );
}

export default PlayerCard;
