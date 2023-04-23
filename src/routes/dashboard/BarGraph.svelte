<div class="graph-region">
    <table>
        <caption>Activity Goals</caption>
        <hr>
        <tbody>
            <tr id="calories">
                <caption>calories</caption>
                <td><div class="progress"></div></td>
            </tr>

            <tr id="exercise">
                <caption>exercise</caption>
                <td><div class="progress"></div></td>
            </tr>

            <tr id="volume">
                <caption>volume</caption>
                <td><div class="progress"></div></td>
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
        height: 40%;
        width: 100%;
        background-color: aqua;
    }

    #exercise .progress{
        background-color: hotpink;
        height: 80%;
    }

    #volume .progress {
        background-color: #34EBC3;
        height: 65%;
    }
</style>
