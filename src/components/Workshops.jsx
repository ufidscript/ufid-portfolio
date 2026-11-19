import WorkshopCard from "./WorkshopCard.jsx";

function Workshops() {
  return (
    <section id="workshops" className="workshops">
      <h2>Workshops I’ve facilitated</h2>
      <p>Helping students learn by building together.</p>

      <WorkshopCard
        title="The Build Session — Notion @ FUTMinna"
        role="Workshop Facilitator"
        dateTime="2026-11-18"
        displayDate="18 November 2026"
        description="Guided beginners through building a Notion event-planning workspace to organise plans, tasks, and resources. Demonstrated how understanding a problem helps shape a useful workspace. Participants then worked in groups to identify problems and build their own solutions during a mini buildathon, with three teams recognised as winners."
      />
    </section>
  );
}

export default Workshops;
