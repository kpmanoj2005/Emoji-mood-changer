function MoodDisplay({value}) {
    const moods ={
        happy: "keep smiling! 😁",
        sad: "It's okay to be sad sometime😒",
        excited: "Let's celebrate🤗",
        angry: "Take a deep breath🤬",
    };
    return (
        <div className="box">
            {value ? <p>{moods[value]}</p> : <p>click on a button</p>}
        </div>
    )
}

export default MoodDisplay;