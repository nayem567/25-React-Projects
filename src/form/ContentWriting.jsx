import React, { useState } from "react";
import "./styles.css";

const universities = [
  "University of St Andrews",
  "University of Oxford",
  "University of Cambridge",
  "London School of Economics and Political Science",
  "Imperial College London",
  "University College London (UCL)",
  "Durham University",
  "University of Bath",
  "University of Warwick",
  "Loughborough University",
  "University of Exeter",
  "University of Glasgow",
  "University of Edinburgh",
  "Lancaster University",
  "University of York",
  "University of Bristol",
  "University of Southampton",
  "University of Sheffield",
  "University of Aberdeen",
  "University of Strathclyde",
  "University of Surrey",
  "University of Birmingham",
  "University of Manchester",
  "University of Leeds",
  "Cardiff University",
  "University of East Anglia",
  "King's College London",
  "SOAS University of London",
  "Royal Holloway, University of London",
  "University of Liverpool",
  "Queen's University Belfast",
  "University of Nottingham",
  "University of Dundee",
  "University of Reading",
  "University of Leicester",
  "Harper Adams University",
  "Newcastle University",
  "Aston University",
  "Aberystwyth University",
  "Ulster University",
  "Swansea University",
  "University of the Arts London",
  "Nottingham Trent University",
  "Bangor University",
  "St Mary’s University, London",
  "Queen Mary, University of London",
  "University of West London",
  "University of Sussex",
  "Northumbria University",
  "Glasgow Caledonian University",
  "Falmouth University",
  "University of Kent",
  "University of Stirling",
  "University of Chichester",
  "University of Lincoln",
  "University of Essex",
  "University of Buckingham",
  "Coventry University",
  "Manchester Metropolitan University",
  "Edinburgh Napier University",
  "Oxford Brookes University",
  "Robert Gordon University",
  "Queen Margaret University",
  "Heriot-Watt University",
  "University of Portsmouth",
  "City, University of London",
  "University of Hull",
  "Keele University",
  "Edge Hill University",
  "University of Plymouth",
  "Liverpool John Moores University",
  "UWE Bristol",
  "Bath Spa University",
  "Norwich University of the Arts",
  "University of Huddersfield",
  "York St John University",
  "Cardiff Metropolitan University",
  "St George's, University of London",
  "Arts University Bournemouth",
  "Bournemouth University",
  "University of Derby",
  "Plymouth Marjon University",
  "Abertay University",
  "Sheffield Hallam University",
  "University of Winchester",
  "University of Brighton",
  "Liverpool Hope University",
  "Leeds Arts University",
  "Bishop Grosseteste University",
  "University of Salford",
  "Leeds Trinity University",
  "University of Sunderland",
  "Staffordshire University",
  "University of Hertfordshire",
  "Goldsmiths, University of London",
  "University of South Wales",
  "Kingston University",
  "University of Roehampton",
  "University of Chester",
  "Leeds Beckett University",
  "Teesside University",
  "University of Worcester",
  "Royal Agricultural University",
  "University of Greenwich",
  "University of Suffolk",
  "University of Bolton",
  "University of Bradford",
  "Solent University",
  "Birmingham City University",
  "University of Central Lancashire",
  "University of Gloucestershire",
  "Hartpury University",
  "Canterbury Christ Church University",
  "Anglia Ruskin University - ARU",
  "London South Bank University",
  "University for the Creative Arts",
  "University of Wales Trinity Saint David",
  "University of Wolverhampton",
  "Brunel University London",
  "De Montfort University",
  "Middlesex University",
  "Wrexham Glyndwr University",
  "University of Westminster",
  "London Metropolitan University",
  "Newman University, Birmingham",
  "University of the West of Scotland",
  "Buckinghamshire New University",
  "University of Northampton",
  "University of Cumbria",
  "University of Bedfordshire",
  "University of East London",
  "Arden University",
  "GBS",
  "Scholar School System",
  "Other",
];

const services = [
  "Assignment",
  "Essay",
  "Report",
  "Literature review",
  "Project/dissertation",
  "Plagiarism Check",
  "AI Check",
  "Other",
];

const allSubjects = [
  "Business",
  "Marketing",
  "Management",
  "Economics",
  "HRM",
  "Tourism management",
  "Other Business/management",
  "Health and Social science",
  "Nursing",
  "Other health",
  "Constructions",
  "Other",
];

const wordCounts = [
  "1 Page - 250 Words",
  "2 Pages - 500 Words",
  "3 Pages - 750 Words",
  "4 Pages - 1000 Words",
  "5 Pages - 1250 Words",
  "6 Pages - 1500 Words",
  "7 Pages - 1750 Words",
  "8 Pages - 2000 Words",
  "9 Pages - 2250 Words",
  "10 Pages - 2500 Words",
  "11 Pages - 2750 Words",
  "12 Pages - 3000 Words",
  "13 Pages - 3250 Words",
  "14 Pages - 3500 Words",
  "15 Pages - 3750 Words",
  "16 Pages - 4000 Words",
  "17 Pages - 4250 Words",
  "18 Pages - 4500 Words",
  "19 Pages - 4750 Words",
  "20 Pages - 5000 Words",
  "21 Pages - 5250 Words",
  "22 Pages - 5500 Words",
  "23 Pages - 5750 Words",
  "24 Pages - 6000 Words",
];

const urgencies = ["4 days", "10 days"];

const ContentWriting = () => {
  const [inputValue, setInputValue] = useState("");
  const [filteredUniversities, setFilteredUniversities] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedService, setSelectedService] = useState(services[0]);
  const [selectedAllSubject, setSelectedAllSubject] = useState(allSubjects[0]);
  const [selectedWordCount, setSelectedWordCount] = useState(wordCounts[0]);
  const [selectedUrgency, setSelectedUrgency] = useState(urgencies[0]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    if (value) {
      const filtered = universities.filter((university) =>
        university.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredUniversities(filtered);
      setShowDropdown(filtered.length > 0);
    } else {
      setShowDropdown(false);
    }
  };

  const handleOptionClick = (university) => {
    setInputValue(university);
    setShowDropdown(false);
  };

  const handleServiceChange = (e) => {
    setSelectedService(e.target.value);
  };

  const handleAllSubjectChange = (e) => {
    setSelectedAllSubject(e.target.value);
  };

  const handleWordCountChange = (e) => {
    setSelectedWordCount(e.target.value);
  };

  const handleUrgencyChange = (e) => {
    setSelectedUrgency(e.target.value);
  };

  return (
    <div className="content-writing-pricing-form">
      <form>
        <label htmlFor="service">Select Service</label>
        <select
          id="service"
          value={selectedService}
          onChange={handleServiceChange}
          aria-label="Select Service"
        >
          {services.map((service, index) => (
            <option key={index} value={service}>
              {service}
            </option>
          ))}
        </select>
  
        <label htmlFor="university">Select University</label>
        <input
          type="text"
          id="university"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Type to search..."
          aria-expanded={showDropdown}
          aria-controls="university-dropdown"
          aria-autocomplete="list"
        />
        {showDropdown && (
          <ul id="university-dropdown" className="dropdown-content" role="listbox">
            {filteredUniversities.map((university, index) => (
              <li
                key={index}
                onClick={() => handleOptionClick(university)}
                role="option"
                aria-selected={inputValue === university}
              >
                {university}
              </li>
            ))}
          </ul>
        )}
  
        <label htmlFor="all-subject">Select Subject</label>
        <select
          id="all-subject"
          value={selectedAllSubject}
          onChange={handleAllSubjectChange}
          aria-label="Select Subject"
        >
          {allSubjects.map((subject, index) => (
            <option key={index} value={subject}>
              {subject}
            </option>
          ))}
        </select>
  
        <label htmlFor="wordcount">Select Wordcount</label>
        <select
          id="wordcount"
          value={selectedWordCount}
          onChange={handleWordCountChange}
          aria-label="Select Wordcount"
        >
          {wordCounts.map((wordCount, index) => (
            <option key={index} value={wordCount}>
              {wordCount}
            </option>
          ))}
        </select>
  
        <label htmlFor="urgency">Select Urgency</label>
        <select
          id="urgency"
          value={selectedUrgency}
          onChange={handleUrgencyChange}
          aria-label="Select Urgency"
        >
          {urgencies.map((urgency, index) => (
            <option key={index} value={urgency}>
              {urgency}
            </option>
          ))}
        </select>
  
        <button type="submit">Submit</button>
      </form>
    </div>
  );
  
};

export default ContentWriting;
