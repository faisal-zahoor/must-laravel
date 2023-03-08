/**
 * --------------------------------------------------------------------------
 * DB
 * This file is to make program search form functional
 * @author faisal@nextash.com
 * --------------------------------------------------------------------------
 */

function append_data(data, wrap, label) {
  wrap.innerHTML = "<option selected>Loading...</option>";
  let html = `<option selected>${label}</option>`;
  for (const row of data) {
    html += `<option value="${parseInt(row.id)}">${row.name}</option>`;
  }
  wrap.innerHTML = html;
}

window.onload = function () {
  // bind wizard elements if page have functionality of program search wizard
  let search_form = document.getElementById("program-search-form");
  if (search_form.length) {
    setTimeout(() => {
      // wizard elements selection
      let levels_wrap = document.getElementById("levels");
      let faculties_wrap = document.getElementById("faculties");
      let departments_wrap = document.getElementById("departments");
      let programs_wrap = document.getElementById("programs");

      // loading levels
      const levels = jsonReader.get_levels();
      append_data(levels, levels_wrap, "Levels");

      // binding on change effect
      let wizards = document.querySelectorAll(".autocomplete-wizard");
      for (const el of wizards) {
        el.addEventListener("change", (e) => {
          const $this = e.target;
          let id = $this.id;
          let val = $this.value;

          if (id == "levels") {
            // loading faculties on change of level
            let data = jsonReader.get_faculties_by_level(val);
            append_data(data, faculties_wrap, "Faculties");
          }

          if (id == "faculties") {
            // loading department on change of faculty
            let data = jsonReader.get_departments_by_faculty(val);
            append_data(data, departments_wrap, "Departments");
          }

          if (id == "departments") {
            // loading programs on change of department
            let data = jsonReader.get_programs_by_department(val);
            append_data(data, programs_wrap, "Programs");
          }
        });
      }
    }, 1000);
  }
};
