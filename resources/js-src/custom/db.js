/**
 * --------------------------------------------------------------------------
 * DB
 * this file is to load dynamic content from json file
 * @author faisal@nextash.com
 * --------------------------------------------------------------------------
 */

class JsonFileReader {
  constructor(filePath) {
    this.filePath = filePath;
    this.data = null;
  }

  async read() {
    try {
      const response = await fetch(this.filePath);
      this.data = await response.json();
      // console.log("loaded JSON file:", this.data);
    } catch (error) {
      console.error("Error loading JSON file:", error);
    }
  }

  // get education levels
  get_levels() {
    return this.data.levels;
  }

  // get faculties
  get_faculties() {
    return this.data.faculties;
  }
  // get departments
  get_departments() {
    return this.data.departments;
  }
  // get programs
  get_programs() {
    return this.data.programs;
  }

  // get faculties by level
  get_faculties_by_level(level_id) {
    return this.get_faculties().filter((i) => i.level_id == level_id);
  }

  // get departments by faculty
  get_departments_by_faculty(faculty_id) {
    return this.get_departments().filter((i) => i.faculty_id == faculty_id);
  }

  // get programs by department
  get_programs_by_department(department_id) {
    return this.get_programs().filter((i) => i.department_id == department_id);
  }

  // get program by id
  get_programs_by_faculty(program_id) {
    return this.get_programs().filter((i) => i.id == program_id);
  }
}

// Create a global instance of the JsonFileReader class
const jsonReader = new JsonFileReader("/database/degrees.json");

// Call the read() method to load the JSON data
jsonReader.read();

