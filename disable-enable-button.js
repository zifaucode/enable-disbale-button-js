<script>
    function manage(txt) {
        var bt = document.getElementById('btSubmit');
        if (txt.value != '') {
            bt.disabled = false;
        } else {
            bt.disabled = true;
        }
    }
</script>

<body>
    <input type="text" id="txt" onkeyup="manage(this)" />

    <input type="submit" id="btSubmit" disabled value="Submit" />
</body>
