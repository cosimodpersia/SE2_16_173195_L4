<html>

<head>
    <title>SE2_16_4</title>
</head>

<body>
    <label for="id">Insert ID Employee</label>
    <input id="id" name="id" class="inputPanel" type="text" size="20" maxlength="50" value="">
    <button id="search">search Employee</button>
    <button id="delete">delete employee</button>
    <br>
    <br>
    <br>
    <button id="showhide">Show or Hide employee form</button>
    <br>
    <br>
    <br>
    <div id="form" style="visibility: hidden;">
        <label for="idf">ID</label>
        <input id="idf" name="idf" class="inputPanel" type="text" size="20" maxlength="50" value="(:id:)">
        <br>
        <br>
        <br>
        <label for="namef">NAME</label>
        <input id="namef" name="namef" class="inputPanel" type="text" size="20" maxlength="50" value="(:name:)">
        <br>
        <br>
        <br>
        <label for="surnamef">SURNAME</label>
        <input id="surnamef" name="surnamef" class="inputPanel" type="text" size="20" maxlength="50" value="(:surname:)">
        <br>
        <br>
        <br>
        <label for="levelf">LEVEL</label>
        <input id="levelf" name="levelf" class="inputPanel" type="text" size="20" maxlength="50" value="(:level:)">
        <br>
        <br>
        <br>
        <label for="salaryf">SALARY</label>
        <input id="salaryf" name="salaryf" class="inputPanel" type="text" size="20" maxlength="50" value="(:salary:)">
        <br>
        <br>
        <button id="insert">insert employee</button>
    </div>
</body>
<script src="uiscript.js"></script>

</html>