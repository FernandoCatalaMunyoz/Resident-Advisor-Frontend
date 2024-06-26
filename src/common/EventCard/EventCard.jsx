import "./EventCard.css";

export const EventCard = ({ title, month, day, year, clickDetail, club }) => {
  return (
    <div className="eventCardDesign">
      <div className="eventCardTitle" onClick={clickDetail}>
        {title}
      </div>
      <div className="eventCardClub">{club}</div>
      <div className="eventCardDate">
        {day}-{month}-{year}
      </div>
    </div>
  );
};
