<script>

    // export props to resemble the graph heights

    export let calories;
    export let exercise;
    export let streak;

</script>

<div class="graph-region">
    <table>
        <caption>Activity Goals</caption>
        <tbody>
            <tr id="calories">
                <caption>calories</caption>
                <td><div class="progress" style:height={`${calories}%`}>{calories}%</div></td>
            </tr>

            <tr id="exercise">
                <caption>exercise</caption>
                <td><div class="progress" style:height={`${exercise}%`}>{exercise}%</div></td>
            </tr>

            <tr id="streak">
                <caption>streak</caption>
                <td><div class="progress" style:height={`${streak}%`}>{streak}%</div></td>
            </tr>
        </tbody>
    </table>
</div>

<style>
    .graph-region {
        display: flex;
        justify-content: center;
        gap: 20px;
    }

    tbody {
        display: flex;
        gap: 30px;
    }

    tr {
        padding: 20px;
    }

    tr caption {
        padding-bottom: 1ch;
    }

    td {
        height: 150px;
        width: 30px;
        background-color: white;
        border-radius: 5px;
        padding: 1ch;
        position: relative;
        overflow: hidden;
    }

    .progress {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        background-color: skyblue;
        text-align: center;
        color: white;
        transition: height 500ms;
    }

    #exercise .progress{
        background-color: hotpink;
    }

    #streak .progress {
        background-color: #34EBC3;
    }

    @media screen and (max-width: 500px) {
        tbody {
            gap: 0px;
        }

        tr caption {
            font-size: 0.75rem;
        }
    }
</style>
