<template>
  <!-- Overdue Table -->
  <div v-show="overdue" class="overdue">
    <table>
      <tr>
        <th colspan="8" class="title">
          OVERDUE TICKETS
        </th>
      </tr>
      <tr>
        <th>Name</th>
        <th>SME</th>
        <th>Ticket Number</th>
        <th>Ticket Name</th>
        <th>Ticket Status</th>
        <th>Assigned Date</th>
        <th>Start Date</th>
        <th>Due Date</th>
      </tr>
      <tr>
        <td>Test Consultant</td>
        <td>Test SME</td>
        <td>TEST-12345</td>
        <td>Test Ticket Title</td>
        <td>In Progress</td>
        <td>06/01/2022</td>
        <td>06/01/2022</td>
        <td>06/03/2022</td>
      </tr>
    </table>
  </div>
  <div>
    <fieldset class="testRadio">
      <div>
        <label for="overdue">
        <input v-model="overdue" id="overdue" type="checkbox">Overdue</label>
      </div>
      <div>
        <label for="background">
          <input v-model="style" id="background" type="radio" value="background">Red Background</label><br>
        <label for="text">
          <input v-model="style" id="text" type="radio" value="text">Red Text</label><br>
      </div>
    </fieldset>
  </div>
  <!-- Android Table -->
  <div class="tables">
    <h2>Android Tickets</h2>
    <table>
      <tr>
        <th>Name</th>
        <th>SME</th>
        <th>Ticket Number</th>
        <th>Ticket Name</th>
        <th>Ticket Status</th>
        <th>Assigned Date</th>
        <th>Start Date</th>
        <th>Due Date</th>
      </tr>
      <tr>
        <td>Android Consultant 1</td>
        <td>Android SME 1</td>
        <td>TEST-12345</td>
        <td>Test Ticket Title</td>
        <td>In Progress</td>
        <td>06/01/2022</td>
        <td>06/01/2022</td>
        <td>06/03/2022</td>
      </tr>
      <tr>
        <td>Android Consultant 2</td>
        <td>Android SME 1</td>
        <td>TEST-12345</td>
        <td>Test Ticket Title</td>
        <td>In Progress</td>
        <td>06/01/2022</td>
        <td>06/01/2022</td>
        <td>06/03/2022</td>
      </tr>
      <tr>
        <td>Android Consultant 3</td>
        <td>Android SME 3</td>
        <td>TEST-12345</td>
        <td>Test Ticket Title</td>
        <td>In Progress</td>
        <td>06/01/2022</td>
        <td>06/01/2022</td>
        <td>06/03/2022</td>
      </tr>
    </table>
  </div>
  <!-- iOS Table -->
  <div class="tables">
    <h2>iOS Tickets</h2>
    <table>
      <tr>
        <th>Name</th>
        <th>SME</th>
        <th>Ticket Number</th>
        <th>Ticket Name</th>
        <th>Ticket Status</th>
        <th>Assigned Date</th>
        <th>Start Date</th>
        <th>Due Date</th>
      </tr>
      <tr>
        <td>iOS Consultant 1</td>
        <td>iOS SME 1</td>
        <td>TEST-12345</td>
        <td>Test Ticket Title</td>
        <td>In Progress</td>
        <td>06/01/2022</td>
        <td>06/01/2022</td>
        <td>06/03/2022</td>
      </tr>
      <tr>
        <td>iOS Consultant 2</td>
        <td>iOS SME 1</td>
        <td>TEST-12345</td>
        <td>Test Ticket Title</td>
        <td>In Progress</td>
        <td>06/01/2022</td>
        <td>06/01/2022</td>
        <td>06/03/2022</td>
      </tr>
      <tr>
        <td>iOS Consultant 3</td>
        <td>iOS SME 3</td>
        <td>TEST-12345</td>
        <td>Test Ticket Title</td>
        <td>In Progress</td>
        <td>06/01/2022</td>
        <td>06/01/2022</td>
        <td>06/03/2022</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "EmployeePortal",
  data() {
    return{
      overdue: false,
      style: ""
    }
  },
  watch: {
    style: function (val) {
      if (val == 'text') {
        document.documentElement.style.setProperty("--color", "red")
        document.documentElement.style.setProperty("--bg", "transparent")
      } else if (val == 'background') {
        document.documentElement.style.setProperty("--bg", "red")
        document.documentElement.style.setProperty("--color", "white")
      }
    }
  }
}
</script>

<style scoped>

html{
  --color: black;
  --bg: white;
}

.title {
  color: var(--color);
  background-color: var(--bg);
  font-size: xxx-large;
}

.tables {
  padding-top: 25px;
  padding-bottom: 25px;
}

table {
  margin-left: auto;
  margin-right: auto;
  border-color: black;
  border-style: ridge;
  border-width: 2px;
  width: 100%;
}

th {
  border: 2px solid black;
}

td {
  border: 2px groove black;
  width: 12.5%;
}

.testRadio {
  margin-top: 15px;
  width: 225px;
}

html {
  background-image: none;
}

</style>