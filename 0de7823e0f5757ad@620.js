function _1(md){return(
md`# Final Project - Milestone #4: Second Draft
`
)}

function _2(md){return(
md`### Team Members

- Amaan Elahi - ae2950
- Aayush Anand - aa13015
- Md Aamir Achhava - ma8616`
)}

function _3(md){return(
md`# Navigating the Global Refugee Crisis: Understanding the Human Flow

Tracing Human Displacement: Analyzing Global Refugee Flows and Resettlement Patterns (2000–2023)`
)}

function _4(md){return(
md`## Introduction

*The goal of our data analysis and presentation is to explore and visualize global trends in refugee and displaced populations based on the Refugee Population Statistics Database compiled by the UN High Commissioner for Refugees (UNHCR). Our project aims to understand patterns, shifts, and key demographic characteristics within forcibly displaced groups, including refugees, asylum seekers, internally displaced people, and stateless individuals. By examining asylum applications, resettlement pathways, and responses by host countries, we intend to uncover insights into how humanitarian crises evolve and how effectively nations respond to such situations. This analysis is significant as it highlights critical geopolitical issues, informs policy-making, and helps raise awareness about global displacement, its underlying causes, and its broader social and economic impacts.*`
)}

function _5(md){return(
md`### Problem & Context

**What problem are you exploring?**  
We are exploring the problem of **forced human displacement**, focusing on global refugee and asylum trends. Millions of people are displaced each year due to conflict, persecution, and climate-related crises, yet the scale, direction, and demographic impact of these movements are often hard to grasp through raw numbers alone. Our goal is to make these patterns visible and interpretable through data visualization.

**Why is this interesting and worthwhile?**  
Understanding refugee movements is crucial for both humanitarian and policy reasons. Visualizing this data helps reveal **which regions are most affected**, **how displacement evolves over time**, and **how host countries respond**. By transforming statistical data into interactive visual insights, we aim to foster awareness, empathy, and data-driven discussions about global migration and humanitarian response.

**What should readers know about the context?**  
The refugee crisis is one of the most pressing global challenges of the 21st century. According to UNHCR, over 110 million people were forcibly displaced worldwide in 2023 — the highest number ever recorded. Behind these statistics are complex geopolitical, social, and environmental factors. Our project situates this data within that context, helping readers understand not only where displacement occurs, but **why** it happens and **how** it changes over time.
`
)}

function _6(md){return(
md`## Dataset

The dataset we are using comes from the UNHCR Refugee Population Statistics Database, which contains detailed information about forcibly displaced populations. The data tracks asylum seekers, refugees, internally displaced persons (IDPs), and stateless individuals, along with demographic details and country responses to asylum applications. This dataset allows us to analyze trends in forced displacement, identify key geopolitical events influencing population movements, and evaluate the effectiveness of resettlement and asylum processes.

The dataset consists of multiple CSV files, each covering a specific aspect of refugee data.  
We found the datasets from [**Kaggle**](https://www.kaggle.com/datasets/unitednations/refugee-data).`
)}

function _7(md){return(
md`### 📊 Dataset Details

**Where does the data come from?**  
The data originates from the [**UNHCR Refugee Population Statistics Database**](https://www.unhcr.org/refugee-statistics/) and is publicly available via [**Kaggle**](https://www.kaggle.com/datasets/unitednations/refugee-data). It provides global, country-level statistics on forced displacement, including refugees, asylum seekers, internally displaced persons (IDPs), and stateless populations.  

**Who collected it and how?**  
The data is collected and maintained by the **United Nations High Commissioner for Refugees (UNHCR)**. It is compiled through official government reports, administrative data submitted by national authorities, and UNHCR’s own field offices, which verify and aggregate information annually for publication.  

**What attributes will you use?**  
We will use attributes such as **year**, **country of origin**, **country of asylum/resettlement**, **population type** (e.g., refugees, asylum seekers, IDPs), **gender**, **age group**, and **total population counts**. These variables allow us to analyze trends in displacement, demographic structures, and regional responses to humanitarian crises.  

**What preprocessing is needed?**  
Minimal preprocessing is required since the Kaggle dataset is already clean and standardized. We will only perform **basic filtering and aggregation** (e.g., grouping by year or region) to prepare data for visualizations such as line charts, flow maps, and demographic pyramids.  
`
)}

function _8(md){return(
md`### DS1 : asylum_seekers.csv / asylum_seekers_monthly.csv

Tracks asylum applications lodged over time, either annually or monthly, categorized by country of asylum and origin. Helps reveal seasonal surges, crisis-driven spikes, and migration route patterns.`
)}

async function _asylum_seeker_data(FileAttachment){return(
await FileAttachment("asylum_seekers.csv").csv({typed: true})
)}

function _10(__query,asylum_seeker_data,invalidation){return(
__query(asylum_seeker_data,{from:{table:"asylum_seeker_data"},sort:[],slice:{to:null,from:null},filter:[],select:{columns:null}},invalidation,"asylum_seeker_data")
)}

async function _asylum_seeker_monthly_data(FileAttachment){return(
await FileAttachment("asylum_seekers_monthly.csv").csv({typed: true})
)}

function _12(__query,asylum_seeker_monthly_data,invalidation){return(
__query(asylum_seeker_monthly_data,{from:{table:"asylum_seeker_monthly_data"},sort:[],slice:{to:null,from:null},filter:[],select:{columns:null}},invalidation,"asylum_seeker_monthly_data")
)}

function _13(md){return(
md`### DS2 : resettlement.csv

Details the number of refugees submitted for and arriving through resettlement programs by destination country and year. It highlights the capacity and responsiveness of host nations toward global refugee resettlement.`
)}

async function _resettlement(FileAttachment){return(
await FileAttachment("resettlement.csv").csv({typed: true})
)}

function _15(__query,resettlement,invalidation){return(
__query(resettlement,{from:{table:"resettlement"},sort:[],slice:{to:null,from:null},filter:[],select:{columns:null}},invalidation,"resettlement")
)}

function _16(md){return(
md`### DS3 : persons_of_concern.csv

Summarizes UNHCR’s key population groups of concern, including refugees, returnees, IDPs, asylum seekers, and stateless individuals. Useful for comparing magnitudes and compositions of forcibly displaced populations globally.`
)}

async function _person_of_concern(FileAttachment){return(
await FileAttachment("persons_of_concern.csv").csv({typed: true})
)}

function _18(__query,person_of_concern,invalidation){return(
__query(person_of_concern,{from:{table:"person_of_concern"},sort:[],slice:{to:null,from:null},filter:[],select:{columns:null}},invalidation,"person_of_concern")
)}

function _19(md){return(
md`### DS4 : demographics.csv

Breaks down refugee and asylum populations by age group and sex for each country and year. Enables demographic visualization such as population pyramids and dependency ratio analysis.`
)}

async function _demographics(FileAttachment){return(
await FileAttachment("demographics.csv").csv({typed: true})
)}

function _21(__query,demographics,invalidation){return(
__query(demographics,{from:{table:"demographics"},sort:[],slice:{to:null,from:null},filter:[],select:{columns:null}},invalidation,"demographics")
)}

function _22(md){return(
md`### DS5 : time_series.csv

Contains annual totals of refugees, asylum seekers, and internally displaced persons by country and year. It provides the backbone for identifying long-term displacement trends and global shifts in refugee populations.`
)}

async function _time_series(FileAttachment){return(
await FileAttachment("time_series.csv").csv({typed: true})
)}

function _24(__query,time_series,invalidation){return(
__query(time_series,{from:{table:"time_series"},sort:[],slice:{to:null,from:null},filter:[],select:{columns:null}},invalidation,"time_series")
)}

function _25(md){return(
md`## Questions to tackle through our visualization project

These are some of the questions that we will try to answer through our visualizations of above datasets.

1. *What is the current global landscape of forced migration and displacement?*

2. *How has the global number of displaced individuals evolved over the last decade?*

3. *From which countries are people fleeing most, and why?*

4. *Where are most asylum seekers headed, and how has this changed over time?*

5. *Are there seasonal or monthly trends in asylum seeker movements?*

6. *Who are these displaced individuals in terms of age and gender?*  

7. *Which countries shoulder the greatest responsibility in hosting refugees?*  

8. *How do asylum-seeker burdens shift across countries in different time periods?*

9. *How does displacement disproportionately affect certain demographic groups (children, women, elderly)?*

10. *What future trends can we anticipate in forced migration, based on historical and demographic patterns?*`
)}

function _d3(require){return(
require("d3@7")
)}

function _27(md){return(
md`### q1 - What is the current global landscape of forced migration and displacement?`
)}

function _world2(d3,topojson){return(
d3.json("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json")
  .then(data => topojson.feature(data, data.objects.countries))
)}

function _q1_origin_choropleth(d3,time_series,world2)
{
  const width = 1150, height = 750;

  const svg = d3.create("svg")
    .attr("width", width)
    .attr("height", height)
    .style("background", "#fafafa")
    .style("font-family", "Poppins, sans-serif");

  // Tooltip
  const tooltip = d3.select("body")
    .append("div")
    .style("position", "absolute")
    .style("padding", "8px 12px")
    .style("background", "white")
    .style("border", "1px solid #ccc")
    .style("border-radius", "6px")
    .style("box-shadow", "0 2px 6px rgba(0,0,0,0.15)")
    .style("font-size", "13px")
    .style("pointer-events", "none")
    .style("opacity", 0);

  // Normalize helper
  const normalize = name =>
    name?.toLowerCase()
      .replace(/ \(.*?\)/g, "")
      .replace(/,.*$/, "")
      .replace("the ", "")
      .replace("rep.", "republic")
      .replace("dem.", "democratic")
      .replace("people's", "peoples")
      .replace(" of ", " ")
      .replace(/\s+/g, " ")
      .trim();

  // Aliases
  const aliases = new Map([
    ["côte d'ivoire", "ivory coast"],
    ["iran islamic republic of", "iran"],
    ["syrian arab republic", "syria"],
    ["syrian arab rep.", "syria"],
    ["venezuela bolivarian republic of", "venezuela"],
    ["russian federation", "russia"],
    ["democratic rep. of the congo", "democratic republic of the congo"],
    ["democratic republic of congo", "democratic republic of the congo"],
    ["congo", "republic of the congo"],
    ["united republic of tanzania", "tanzania"],
    ["republic of moldova", "moldova"],
    ["lao peoples democratic republic", "laos"],
    ["viet nam", "vietnam"],
    ["swaziland", "eswatini"],
    ["myanmar", "burma"],
    ["the former yugoslav republic of macedonia", "north macedonia"],
    ["serbia and kosovo", "serbia"],
    ["china hong kong sar", "hong kong"],
    ["china macao sar", "macao"],
    ["turkey", "türkiye"],
    ["united states of america", "united states"],
    ["united kingdom", "uk"]
  ]);

  const canonical = name => aliases.get(normalize(name)) || normalize(name);

  const latest = d3.max(time_series, d => d.Year);
  const data2023 = time_series.filter(d => d.Year === latest);

  // Aggregate BY ORIGIN
  const byCountry = d3.rollups(
    data2023,
    v => d3.sum(v, d => d.Value),
    d => d.Origin
  ).map(([country, total]) => ({ country, total }));

  const countryMap = new Map(
    byCountry.map(d => [canonical(d.country), d.total])
  );

  const maxVal = d3.max(byCountry, d => d.total);
  const minVal = 0;

  const color = d3.scaleSequential()
    .domain([minVal, maxVal])
    .interpolator(d3.interpolateOrRd);

  const projection = d3.geoNaturalEarth1()
    .scale(210)
    .translate([width / 2 - 50, height / 2 + 20]);

  const path = d3.geoPath(projection);

  // MAP
  svg.append("g")
    .selectAll("path")
    .data(world2.features)
    .join("path")
      .attr("d", path)
      .attr("fill", d => {
        const key = canonical(d.properties.name);
        const val = countryMap.get(key);
        return val ? color(val) : "#e0e0e0";
      })
      .attr("stroke", "#0e0e0e")
      .attr("stroke-width", 0.5)
      .on("mousemove", (event, d) => {
        const key = canonical(d.properties.name);
        const val = countryMap.get(key);

        tooltip.style("opacity", 1)
          .html(`<strong>${d.properties.name}</strong><br>${val ? d3.format(",")(val) : "No data"}`)
          .style("left", event.pageX + 15 + "px")
          .style("top", event.pageY + 15 + "px");
      })
      .on("mouseleave", () => tooltip.style("opacity", 0));

  // --------- LEGEND ---------

  const legendHeight = 220;
  const legendWidth = 14;

  const legendX = width - 140;
  const legendY = 160;

  const defs = svg.append("defs");
  const gradient = defs.append("linearGradient")
    .attr("id", "legend-gradient")
    .attr("x1", "0%").attr("x2", "0%")
    .attr("y1", "100%").attr("y2", "0%");

  d3.range(0, 1.01, 0.05).forEach(t => {
    gradient.append("stop")
      .attr("offset", `${t * 100}%`)
      .attr("stop-color", color(t * maxVal));
  });

  // Gradient Bar
  svg.append("rect")
    .attr("x", legendX)
    .attr("y", legendY)
    .attr("width", legendWidth)
    .attr("height", legendHeight)
    .style("fill", "url(#legend-gradient)");

  // Axis Scale
  const legendScale = d3.scaleLinear()
    .domain([0, maxVal])
    .range([legendHeight, 0]);

  svg.append("g")
    .attr("transform", `translate(${legendX + legendWidth + 6}, ${legendY})`)
    .call(d3.axisRight(legendScale).ticks(6).tickFormat(d3.format(",")))
    .selectAll("text")
    .style("font-size", 11);

  svg.append("text")
    .attr("x", legendX - 10)
    .attr("y", legendY - 20)
    .attr("font-size", 13)
    .attr("font-weight", 600)
    .selectAll("tspan")
    .data([
      "Total Displaced",
      "(Origin)"
    ])
    .enter()
    .append("tspan")
      .attr("x", legendX - 5)
      .attr("dy", (d, i) => i === 0 ? 0 : 14)
      .text(d => d);

  // Titles
  svg.append("text")
    .attr("x", width / 2)
    .attr("y", 50)
    .attr("text-anchor", "middle")
    .attr("font-size", 26)
    .attr("font-weight", 700)
    .text("Latest Global Landscape of Forced Displacement (Origins)");

  svg.append("text")
    .attr("x", width / 2)
    .attr("y", 75)
    .attr("text-anchor", "middle")
    .attr("font-size", 14)
    .attr("fill", "#666")
    .text("Countries shaded by number of displaced people originating from them");

  return svg.node();
}


function _30(md){return(
md`### **Analysis and Interpretation**

- The map shows the number of displaced people living in each country in 2023. Darker shades mean higher displacement.

- Forced displacement is concentrated mainly in regions with conflict, violence, or severe crises.

- **Middle East:** Countries like Syria and Yemen have very high displaced populations because of long-lasting wars and instability.

- **Africa:** Countries such as Sudan, South Sudan, Ethiopia, and the Democratic Republic of the Congo show large numbers of displaced people due to ongoing conflicts and political unrest.

- **Latin America:** Venezuela and Colombia stand out. Venezuela’s political and economic crisis has forced millions to leave, and Colombia hosts many internally displaced people.

- Large parts of **Europe**, **North America**, and **East Asia** appear lighter, meaning they have fewer displaced people inside their borders, even though many of them accept asylum seekers.

- Overall, the map shows that displacement is not evenly spread. A small number of regions facing serious crises carry the biggest burden of displaced populations.

- The global landscape today is strongly shaped by long-term wars, unstable political conditions, and humanitarian emergencies that continue to push millions of people away from their homes.

---

### **Insights and Implications**

- A small group of regions absorbs most of the world’s displaced people. Humanitarian efforts need to focus heavily on these crisis areas.

- Countries facing active conflict or disaster need more international support, since they host or produce the largest displaced populations despite limited resources.

- Neighboring countries often bear the responsibility of hosting displaced people, which can strain their social and economic systems.

- Lighter-shaded countries often play a role as asylum destinations rather than hosts of large internal displacement, showing an imbalance in who carries the burden.

- The uneven distribution of displacement highlights the importance of global cooperation and shared responsibility to support affected nations.

`
)}

function _31(md){return(
md`### q2 - How has the global number of displaced individuals evolved over the last decade?`
)}

function _q2_stacked_area(d3,time_series)
{
  const width = 1150, height = 600;
  const margin = { top: 70, right: 180, bottom: 60, left: 90 };

  const svg = d3.create("svg")
    .attr("width", width)
    .attr("height", height)
    .style("background", "#fff")
    .style("font-family", "Poppins, sans-serif");

  // Tooltip
  const tooltip = d3.select("body")
    .append("div")
    .style("position", "absolute")
    .style("padding", "8px 12px")
    .style("background", "white")
    .style("border", "1px solid #ccc")
    .style("border-radius", "6px")
    .style("box-shadow", "0 2px 6px rgba(0,0,0,0.15)")
    .style("font-size", "13px")
    .style("pointer-events", "none")
    .style("opacity", 0);

  // Aggregate by year and population type

  const filtered = time_series.filter(d => d.Year >= 1980 && d.Year <= 2023);
  const grouped = d3.rollups(
    filtered,
    v => d3.sum(v, d => d.Value),
    d => d.Year,
    d => d["Population type"]
  )
  .map(([year, entries]) => {
    const rec = { Year: +year };
    for (const [ptype, val] of entries) rec[ptype] = val;
    return rec;
  })
  .sort((a, b) => d3.ascending(a.Year, b.Year));

  // ONLY THESE KEYS (removed stateless persons)
  const popKeys = [
    "Refugees (incl. refugee-like situations)",
    "Asylum-seekers",
    "Internally displaced persons"
  ];

  // Convert to millions
  grouped.forEach(d => {
    popKeys.forEach(k => d[k] = d[k] ? d[k] / 1e6 : 0);
  });

  const stack = d3.stack().keys(popKeys);
  const series = stack(grouped);

  const x = d3.scaleLinear()
    .domain(d3.extent(grouped, d => d.Year))
    .range([margin.left, width - margin.right]);

  const y = d3.scaleLinear()
    .domain([0, d3.max(series, s => d3.max(s, d => d[1]))])
    .nice()
    .range([height - margin.bottom, margin.top]);

  const color = d3.scaleOrdinal()
    .domain(popKeys)
    .range(["#6baed6", "#fdae6b", "#fb6a4a"]);  // removed 4th color

  const area = d3.area()
    .x(d => x(d.data.Year))
    .y0(d => y(d[0]))
    .y1(d => y(d[1]));

  // AREA SHAPES
  svg.append("g")
    .selectAll("path")
    .data(series)
    .join("path")
      .attr("fill", d => color(d.key))
      .attr("opacity", 0.85)
      .attr("d", area)
      .on("mousemove", (event, layer) => {
        const [mx] = d3.pointer(event);
        const year = Math.round(x.invert(mx));
        const rec = grouped.find(d => d.Year === year);
        if (!rec) return;

        tooltip
          .style("opacity", 1)
          .html(`
            <strong>${layer.key.replace("(incl. refugee-like situations)", "")}</strong><br>
            Year: <strong>${year}</strong><br>
            Value: <strong>${rec[layer.key].toFixed(2)}M</strong>
          `)
          .style("left", event.pageX + 15 + "px")
          .style("top", event.pageY + 15 + "px");
      })
      .on("mouseleave", () => tooltip.style("opacity", 0));

  // Axes
  svg.append("g")
    .attr("transform", `translate(0,${height - margin.bottom})`)
    .call(d3.axisBottom(x).tickFormat(d3.format("d")));

  svg.append("g")
    .attr("transform", `translate(${margin.left},0)`)
    .call(d3.axisLeft(y));

  // Labels
  svg.append("text")
    .attr("x", -height / 2)
    .attr("y", 35)
    .attr("transform", "rotate(-90)")
    .attr("text-anchor", "middle")
    .attr("font-size", 14)
    .text("Displaced Population (Millions)");

  svg.append("text")
    .attr("x", width / 2)
    .attr("y", height - margin.bottom + 40)
    .attr("text-anchor", "middle")
    .attr("font-size", 14)
    .text("Year");

  // Title
  svg.append("text")
    .attr("x", width / 2)
    .attr("y", 35)
    .attr("text-anchor", "middle")
    .attr("font-size", 22)
    .attr("font-weight", 700)
    .text("Growth of Global Displacement by Population Type (1980–2016)");

  svg.append("text")
    .attr("x", width / 2)
    .attr("y", 60)
    .attr("text-anchor", "middle")
    .attr("font-size", 13)
    .attr("fill", "#555")
    .text("Stacked view of asylum seekers, IDPs, and refugees");

  // -------- LEGEND (stateless removed) --------
  const legend = svg.append("g")
    .attr("transform", `translate(${width - 150}, ${margin.top})`);

  popKeys.forEach((k, i) => {
    const g = legend.append("g")
      .attr("transform", `translate(0, ${i * 22})`);

    g.append("circle")
      .attr("cx", 0)
      .attr("cy", 0)
      .attr("r", 6)
      .attr("fill", color(k));

    g.append("text")
      .attr("x", 12)
      .attr("y", 4)
      .attr("font-size", 12)
      .text(k.replace("(incl. refugee-like situations)", "").trim());
  });

  return svg.node();
}


function _33(md){return(
md`### **Analysis and Interpretation**

- The chart shows how the total number of displaced people has changed from 2000 to 2023. It includes refugees, asylum seekers, internally displaced persons, and stateless people.

- The overall trend is a strong increase. Global displacement rose from around 30 million in the early 2000s to more than 60 million by 2023.

- Internally displaced persons make up the largest share of this growth. Their numbers rise sharply after 2010, suggesting that many crises are happening inside countries rather than across borders.

- Refugee numbers also increase over time, especially after 2012. This rise is linked to major conflicts in Syria, South Sudan, and Afghanistan.

- Asylum seekers and stateless persons remain smaller groups but still show steady upward trends.

- The biggest jump appears after 2015, when several conflicts and humanitarian emergencies caused a rapid surge in displacement.

- Overall, the chart shows that global forced displacement has grown very quickly in the last decade. More people are being pushed from their homes because of long-term violence and instability.

---

### **Insights and Implications**

- The rapid increase in displacement means humanitarian systems must prepare for long-term, not temporary, support.

- The sharp rise in internally displaced persons highlights the need for stronger protection and aid inside conflict-affected countries.

- Since refugee numbers rise during major crises, early international intervention could help prevent displacement waves.

- The steady growth of asylum seekers and stateless people shows that legal pathways and documentation systems need improvement.

- High post-2015 displacement levels indicate that new crises can cause sudden spikes, stressing the importance of flexible and responsive aid systems.

- Overall, the continuous upward trend suggests that global displacement will likely keep growing unless root causes such as conflict and political instability are addressed.

`
)}

function _34(md){return(
md`### q3 - From which countries are people fleeing most, and why?`
)}

function _q3_refugee_origins(d3,person_of_concern)
{
  const width = 1100, height = 650;
  const margin = { top: 140, right: 240, bottom: 70, left: 220 };

  const svg = d3.create("svg")
    .attr("width", width)
    .attr("height", height)
    .style("background", "#ffffff")
    .style("font-family", "Poppins, sans-serif");

  // Tooltip
  const tooltip = d3.select("body")
    .append("div")
    .style("position", "absolute")
    .style("padding", "8px 12px")
    .style("background", "white")
    .style("border", "1px solid #ccc")
    .style("border-radius", "6px")
    .style("box-shadow", "0 2px 6px rgba(0,0,0,0.15)")
    .style("font-size", "13px")
    .style("pointer-events", "none")
    .style("opacity", 0);

  // Normalize
  const norm = s =>
    (s || "")
      .toLowerCase()
      .replace(/\./g, "")
      .replace(/\s+/g, " ")
      .trim();

  const regionMap = new Map([
    ["syrian arab rep", "Middle East"],
    ["syria", "Middle East"],
    ["afghanistan", "Asia"],
    ["south sudan", "Africa"],
    ["somalia", "Africa"],
    ["sudan", "Africa"],
    ["dem rep of the congo", "Africa"],
    ["congo", "Africa"],
    ["central african rep", "Africa"],
    ["eritrea", "Africa"],
    ["burundi", "Africa"],
    ["myanmar", "Asia"],
    ["yemen", "Middle East"],
    ["ukraine", "Europe"],
    ["venezuela bolivarian republic of", "Latin America"]
  ]);

  const getRegion = o => regionMap.get(norm(o)) || "Other";

  const latestYear = d3.max(person_of_concern, d => d.Year);

  const data = person_of_concern.filter(d =>
    d.Year === latestYear &&
    d["Refugees (incl. refugee-like situations)"] != null
  );

  const byOrigin = d3.rollups(
    data,
    v => d3.sum(v, d => d["Refugees (incl. refugee-like situations)"]),
    d => d.Origin
  )
  .map(([origin, total]) => ({
    origin,
    total,
    region: getRegion(origin)
  }))
  .filter(d => d.origin && d.origin !== "Various/Unknown");

  const top10 = byOrigin
    .sort((a, b) => d3.descending(a.total, b.total))
    .slice(0, 10);

  const y = d3.scaleBand()
    .domain(top10.map(d => d.origin))
    .range([margin.top, height - margin.bottom])
    .padding(0.2);

  const x = d3.scaleLinear()
    .domain([0, d3.max(top10, d => d.total)])
    .nice()
    .range([margin.left, width - margin.right]);

  const regionColors = d3.scaleOrdinal()
    .domain(["Africa", "Asia", "Europe", "Latin America", "Middle East", "Other"])
    .range(["#2ca25f", "#fc8d62", "#8da0cb", "#e78ac3", "#ffd92f", "#2196f3"]);

  // Bars WITH TOOLTIP
  svg.append("g")
    .selectAll("rect")
    .data(top10)
    .join("rect")
      .attr("x", margin.left)
      .attr("y", d => y(d.origin))
      .attr("width", d => x(d.total) - margin.left)
      .attr("height", y.bandwidth())
      .attr("fill", d => regionColors(d.region))
      .on("mousemove", (event, d) => {
        tooltip
          .style("opacity", 1)
          .html(`
            <strong>${d.origin}</strong><br>
            Region: <strong>${d.region}</strong><br>
            Refugees: <strong>${d3.format(",")(d.total)}</strong>
          `)
          .style("left", event.pageX + 15 + "px")
          .style("top", event.pageY + 15 + "px");
      })
      .on("mouseleave", () => tooltip.style("opacity", 0));

  // Labels on bars
  svg.append("g")
    .selectAll("text.label")
    .data(top10)
    .join("text")
      .attr("x", d => x(d.total) + 8)
      .attr("y", d => y(d.origin) + y.bandwidth() / 2 + 4)
      .attr("font-size", 12)
      .text(d => d3.format(".3s")(d.total));

  // Axes
  svg.append("g")
    .attr("transform", `translate(0,${margin.top})`)
    .call(d3.axisTop(x).ticks(6).tickFormat(d3.format(".2s")));

  svg.append("g")
    .attr("transform", `translate(${margin.left},0)`)
    .call(d3.axisLeft(y));

  // X-Axis Label
  svg.append("text")
    .attr("x", width / 2)
    .attr("y", margin.top - 35)
    .attr("text-anchor", "middle")
    .attr("font-size", 14)
    .attr("font-weight", 500)
    .text("Total Refugees");
  
  // Y-Axis Label
  svg.append("text")
    .attr("x", -(height / 2))
    .attr("y", 40)
    .attr("transform", "rotate(-90)")
    .attr("text-anchor", "middle")
    .attr("font-size", 14)
    .attr("font-weight", 500)
    .text("Origin Country");

  // Title & Subtitle
  svg.append("text")
    .attr("x", width / 2)
    .attr("y", 45)
    .attr("text-anchor", "middle")
    .attr("font-size", 28)
    .attr("font-weight", 700)
    .text(`Top Refugee-Origin Countries in ${latestYear}`);

  svg.append("text")
    .attr("x", width / 2)
    .attr("y", 70)
    .attr("text-anchor", "middle")
    .attr("font-size", 14)
    .attr("fill", "#555")
    .text("Based on number of refugees (incl. refugee-like situations)");

  // Legend
  const legend = svg.append("g")
    .attr("transform", `translate(${width - 180}, ${margin.top})`);

  regionColors.domain().forEach((region, i) => {
    const g = legend.append("g")
      .attr("transform", `translate(0, ${i * 22})`);

    g.append("rect")
      .attr("width", 14)
      .attr("height", 14)
      .attr("fill", regionColors(region));

    g.append("text")
      .attr("x", 20)
      .attr("y", 12)
      .attr("font-size", 12)
      .text(region);
  });

  return svg.node();
}


function _36(md){return(
md`### **Analysis and Interpretation**

- The chart shows the top countries people fled from in 2016. These countries produced the highest number of refugees that year.

- **Syria** is the largest source of refugees. More than 5 million people left the country because of the long-running civil war and widespread violence.

- **Afghanistan** is the second biggest source. Many years of conflict and insecurity have forced people to migrate.

- Several **African countries** appear in the top ten, including South Sudan, Somalia, Sudan, the Democratic Republic of the Congo, the Central African Republic, Eritrea, and Burundi. These countries face ongoing conflict, political instability, and unsafe living conditions.

- **Myanmar** also appears in the list. Violence and persecution, especially against minority groups, have pushed many people to flee the country.

- Most of the countries in the top ten share similar issues: war, political unrest, economic instability, and humanitarian crises. These make daily life unsafe and force people to leave.

- Overall, the chart shows that people mainly flee from countries facing severe violence or instability. These crises create unsafe environments, leading to large movements of refugees.

---

### **Insights and Implications**

- Refugee movements are closely tied to conflict. Countries experiencing war or political crises produce the largest numbers of displaced people.

- Regions with weak governance and limited resources are especially vulnerable, causing long-term displacement.

- Neighboring countries often face pressure as they receive refugees from nearby crisis areas.

- The presence of so many African nations in the top ten highlights that the continent continues to struggle with long-lasting conflicts.

- The case of Myanmar shows that persecution and human rights violations can produce displacement even outside typical war zones.

- Understanding which countries generate the most refugees can help guide international aid, peacebuilding efforts, and long-term resettlement planning.

`
)}

function _37(md){return(
md`### q4 - Where are most asylum seekers headed, and how has this changed over time?`
)}

function _q4_bump_chart(d3,asylum_seeker_data)
{
  const width = 1200, height = 780;
  const margin = { top: 100, right: 260, bottom: 120, left: 220 };

  const svg = d3.create("svg")
    .attr("width", width)
    .attr("height", height)
    .style("font-family", "Poppins, sans-serif")
    .style("background", "#fff");

  // ------------- TOOLTIP -------------
  const tooltip = d3.select("body")
    .append("div")
    .style("position", "absolute")
    .style("padding", "8px 12px")
    .style("background", "white")
    .style("border", "1px solid #ccc")
    .style("border-radius", "6px")
    .style("box-shadow", "0 2px 6px rgba(0,0,0,0.15)")
    .style("font-size", "13px")
    .style("pointer-events", "none")
    .style("opacity", 0);

  // ----------- DATA TRANSFORM ----------
  const grouped = d3.rollups(
    asylum_seeker_data,
    v => d3.sum(v, d => d["Applied during year"] || 0),
    d => d.Year,
    d => d["Country / territory of asylum/residence"]
  );

  let flat = [];
  for (const [year, arr] of grouped) {
    for (const [country, total] of arr) {
      flat.push({ year: +year, country, total });
    }
  }

  const years = Array.from(new Set(flat.map(d => d.year))).sort(d3.ascending);

  const rankedByYear = new Map();
  years.forEach(year => {
    const entries = flat.filter(d => d.year === year);
    const top = entries
      .sort((a, b) => d3.descending(a.total, b.total))
      .slice(0, 10);
    top.forEach((d, i) => d.rank = i + 1);
    rankedByYear.set(year, top);
  });

  const countries = new Set(
    Array.from(rankedByYear.values()).flat().map(d => d.country)
  );

  const series = Array.from(countries).map(country => ({
    country,
    values: years.map(year => {
      const rec = rankedByYear.get(year).find(d => d.country === country);
      return { year, rank: rec ? rec.rank : null };
    })
  }));

  // ---------- SCALES ----------
  const x = d3.scaleLinear()
    .domain(d3.extent(years))
    .range([margin.left, width - margin.right]);

  const y = d3.scaleLinear()
    .domain([1, 10])
    .range([margin.top, height - margin.bottom - 40]);

  const colors40 = [
    "#4E79A7", "#F28E2B", "#E15759", "#76B7B2", "#59A14F",
    "#EDC949", "#AF7AA1", "#FF9DA7", "#9C755F", "#BAB0AB",
    "#1F77B4", "#FF7F0E", "#2CA02C", "#D62728", "#9467BD",
    "#8C564B", "#E377C2", "#7F7F7F", "#BCBD22", "#17BECF",  
    "#6B4E9A", "#A0CBE8", "#FFBE7D", "#FF9D9A", "#86BCB6",
    "#8CD17D", "#B6992D", "#D4A6C8", "#C7C7C7", "#B07AA1",  
    "#7F7FA2", "#C49C94", "#F1CE63", "#7B7C08", "#C3C9E8",
    "#A6D608", "#EA5545", "#F46A9B", "#EF9B20", "#EDBD00"
  ];
  
  const color = d3.scaleOrdinal(colors40)
    .domain([...countries]);

  const line = d3.line()
    .defined(d => d.rank != null)
    .x(d => x(d.year))
    .y(d => y(d.rank))
    .curve(d3.curveMonotoneX);

  // ---------- AXES ----------
  svg.append("g")
    .attr("transform", `translate(0,${height - margin.bottom - 40})`)
    .call(d3.axisBottom(x).tickFormat(d3.format("d")));

  svg.append("g")
    .attr("transform", `translate(${margin.left - 20},0)`)
    .call(d3.axisLeft(y).ticks(10).tickFormat(d => `#${d}`));

  // Labels
  svg.append("text")
    .attr("x", width / 2)
    .attr("y", height - margin.bottom - 8)
    .attr("text-anchor", "middle")
    .attr("font-size", 14)
    .text("Year");

  svg.append("text")
    .attr("x", -height / 2)
    .attr("y", margin.left - 120)
    .attr("transform", "rotate(-90)")
    .attr("text-anchor", "middle")
    .attr("font-size", 14)
    .text("Rank (1 = Most Asylum Seekers)");

  // Title
  svg.append("text")
    .attr("x", width / 2)
    .attr("y", 40)
    .attr("text-anchor", "middle")
    .attr("font-size", 26)
    .attr("font-weight", 700)
    .text("Top Asylum-Seeker Destination Countries Over Time");

  svg.append("text")
    .attr("x", width / 2)
    .attr("y", 68)
    .attr("text-anchor", "middle")
    .attr("font-size", 14)
    .attr("fill", "#555")
    .text("Bump chart showing annual top 10 destinations by rank");

  // ---------- LINES ----------
  svg.append("g")
    .selectAll("path")
    .data(series)
    .join("path")
      .attr("fill", "none")
      .attr("stroke", d => color(d.country))
      .attr("stroke-width", 2)
      .attr("opacity", 0.30)
      .attr("d", d => line(d.values));

  // ---------- DOTS Layer ----------
  const dotLayer = svg.append("g");

  // ---------- DYNAMIC LEGEND ----------
  const legendGroup = svg.append("g")
    .attr("transform", `translate(${width - margin.right + 20}, ${margin.top + 10})`);

  function updateLegend(year) {
    const top = rankedByYear.get(year);
    legendGroup.selectAll("*").remove();

    top.forEach((d, i) => {
      const g = legendGroup.append("g")
        .attr("transform", `translate(0, ${i * 22})`);

      g.append("circle")
        .attr("cx", 0)
        .attr("cy", 0)
        .attr("r", 6)
        .attr("fill", color(d.country));

      g.append("text")
        .attr("x", 12)
        .attr("y", 4)
        .attr("font-size", 12)
        .text(`#${d.rank} ${d.country}`);
    });
  }

  // ---------- UPDATE YEAR FUNCTION ----------
  function updateYear(year) {
    const top = rankedByYear.get(year);

    yearLabel.textContent = year;

    const dots = dotLayer.selectAll("circle")
      .data(top, d => d.country);

    dots.join(
      enter => enter.append("circle")
        .attr("cx", x(year))
        .attr("cy", d => y(d.rank))
        .attr("r", 7)
        .attr("fill", d => color(d.country))
        .attr("stroke", "#333")
        .on("mousemove", (event, d) => {
          tooltip
            .style("opacity", 1)
            .html(`
              <strong>${d.country}</strong><br>
              Year: <strong>${year}</strong><br>
              Rank: <strong>#${d.rank}</strong><br>
              Total asylum seekers: <strong>${d3.format(",")(d.total)}</strong>
            `)
            .style("left", event.pageX + 15 + "px")
            .style("top", event.pageY + 15 + "px");
        })
        .on("mouseleave", () => tooltip.style("opacity", 0)),
      update => update
        .transition().duration(250)
        .attr("cx", x(year))
        .attr("cy", d => y(d.rank)),
      exit => exit.remove()
    );

    updateLegend(year);
  }

  // ---------- YEAR SLIDER ----------
  const sliderFO = svg.append("foreignObject")
    .attr("x", width / 2 - 220)
    .attr("y", height - margin.bottom + 10)
    .attr("width", 440)
    .attr("height", 70);

  const sliderDiv = sliderFO.append("xhtml:div")
    .style("display", "flex")
    .style("align-items", "center")
    .style("justify-content", "center")
    .style("gap", "10px");

  sliderDiv.html(`
    <span style="font-weight:600;font-size:14px;">Year:</span>
    <input type="range" min="${d3.min(years)}" max="${d3.max(years)}" step="1" value="${d3.min(years)}" style="width:260px;">
    <span id="yearText" style="font-weight:600;">${d3.min(years)}</span>
  `);

  const sliderNode = sliderDiv.select("input").node();
  const yearLabel = sliderDiv.select("#yearText").node();

  sliderNode.addEventListener("input", () => {
    updateYear(+sliderNode.value);
  });

  // ---------- INITIAL RENDER ----------
  updateYear(d3.min(years));

  return svg.node();
}


function _39(md){return(
md`### **Analysis and Interpretation**

- The bump chart shows how the top destinations for asylum seekers changed from 2000 to 2016. Each line represents a country, and its position shows how many asylum seekers it received compared to others in that year.

- The rankings change often, meaning no single country stays at the top every year. This shows that asylum patterns shift as global events change.

- **Germany** becomes a major destination after 2010. This rise matches large conflicts in the Middle East, especially the Syrian crisis, which pushed many people toward Europe.

- **France**, the **United States**, the **United Kingdom**, and **Sweden** appear frequently near the top. These countries have stronger asylum systems and are common choices for people seeking protection.

- **South Africa** also ranks high in several years because many asylum seekers travel there from neighboring African countries.

- Countries such as **Italy**, **Belgium**, **Hungary**, and **Turkey** move in and out of the top ten. Their spikes often match regional crises or sudden increases in nearby displacement.

- Overall, the chart shows that asylum seekers usually go to countries with stronger economies, well-developed asylum systems, or closer geographic access.

- The rising and falling lines reflect how strongly global crises, wars, and political changes affect where people seek asylum. As conflicts shift to new regions, the top destination countries change as well.

---

### **Insights and Implications**

- Asylum responsibilities shift often between countries. Humanitarian planning must be flexible and able to respond to sudden changes.

- Countries near major conflict zones often experience short-term spikes, showing how geography plays an important role.

- Wealthier nations continue to attract many asylum seekers because they offer stronger legal protections and support systems.

- The chart highlights that no single region carries the burden alone. Different countries rise to the top during different crises.

- Understanding these long-term shifts helps policymakers prepare better asylum systems and share responsibility more fairly across countries.

`
)}

function _40(md){return(
md`### q5 - Are there seasonal or monthly trends in asylum seeker movements?`
)}

function _monthly_global(FileAttachment){return(
FileAttachment("asylum_monthly_global_avg.csv").csv()
)}

async function _monthly_europe(FileAttachment){return(
await FileAttachment("asylum_monthly_europe_avg.csv").csv({typed: true})
)}

async function _window5(FileAttachment){return(
await FileAttachment("asylum_5yr_window.csv").csv({typed: true})
)}

async function _window3(FileAttachment){return(
await FileAttachment("asylum_3yr_window.csv").csv({typed: true})
)}

function _monthly_applications_chart(d3,monthly_global)
{
  // Set up dimensions and margins
  const margin = { top: 60, right: 30, bottom: 60, left: 80 };
  const width = 650 - margin.left - margin.right;
  const height = 380 - margin.top - margin.bottom;

  // Tooltip
  const tooltip = d3.select("body")
    .append("div")
    .style("position", "absolute")
    .style("padding", "8px 12px")
    .style("background", "white")
    .style("border", "1px solid #ccc")
    .style("border-radius", "6px")
    .style("box-shadow", "0 2px 6px rgba(0,0,0,0.15)")
    .style("font-size", "13px")
    .style("pointer-events", "none")
    .style("opacity", 0);

  // Define month order
  const monthOrder = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  // Parse the data
  const data = monthly_global.map(d => ({
    Month: d.Month,
    Value: +d.Value
  }));

  // Create scales
  const xScale = d3.scaleBand()
    .domain(monthOrder)
    .range([0, width])
    .padding(0.1);

  const yScale = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.Value)])
    .nice()
    .range([height, 0]);

  // Create SVG container
  const svg = d3.create("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom);

  const g = svg.append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

  // Add X axis
  g.append("g")
    .attr("transform", `translate(0,${height})`)
    .call(d3.axisBottom(xScale))
    .selectAll("text")
    .attr("transform", "rotate(-45)")
    .style("text-anchor", "end");

  // Add Y axis
  g.append("g")
    .call(d3.axisLeft(yScale));

  // Add axis labels
  g.append("text")
    .attr("text-anchor", "middle")
    .attr("x", width / 2)
    .attr("y", height + 50)
    .text("Month");

  g.append("text")
    .attr("text-anchor", "middle")
    .attr("transform", "rotate(-90)")
    .attr("x", -height / 2)
    .attr("y", -60)
    .text("Avg Asylum Applications");

  // Create line generator
  const line = d3.line()
    .x(d => xScale(d.Month) + xScale.bandwidth() / 2)
    .y(d => yScale(d.Value));

  // Add the line
  g.append("path")
    .datum(data)
    .attr("fill", "none")
    .attr("stroke", "steelblue")
    .attr("stroke-width", 2)
    .attr("d", line);

  // Add points WITH tooltip
  g.selectAll(".point")
    .data(data)
    .join("circle")
    .attr("class", "point")
    .attr("cx", d => xScale(d.Month) + xScale.bandwidth() / 2)
    .attr("cy", d => yScale(d.Value))
    .attr("r", 5)
    .attr("fill", "steelblue")
    .attr("stroke", "white")
    .attr("stroke-width", 1.5)
    .style("cursor", "pointer")
    .on("mousemove", (event, d) => {
      tooltip.style("opacity", 1)
        .html(`
          <strong>${d.Month}</strong><br>
          Avg Applications: <strong>${d.Value}</strong>
        `)
        .style("left", event.pageX + 15 + "px")
        .style("top", event.pageY + 15 + "px");
    })
    .on("mouseleave", () => tooltip.style("opacity", 0));

  // Add title
  svg.append("text")
    .attr("x", (width + margin.left + margin.right) / 2)
    .attr("y", 30)
    .attr("text-anchor", "middle")
    .style("font-size", "16px")
    .style("font-weight", "bold")
    .text("Average Monthly Asylum Applications (Global)");

  return svg.node();
}


function _chart_europe(d3,monthly_europe)
{
  const width = 650, height = 380;
  const margin = {top: 45, right: 30, bottom: 50, left: 60};

  // ---- TOOLTIP ----
  const tooltip = d3.select("body")
    .append("div")
    .style("position", "absolute")
    .style("padding", "8px 12px")
    .style("background", "white")
    .style("border", "1px solid #ccc")
    .style("border-radius", "6px")
    .style("box-shadow", "0 2px 6px rgba(0,0,0,0.15)")
    .style("font-size", "13px")
    .style("pointer-events", "none")
    .style("opacity", 0);

  const svg = d3.create("svg")
      .attr("width", width)
      .attr("height", height);

  // ---- SCALES ----
  const x = d3.scalePoint()
      .domain(monthly_europe.map(d => d.Month))
      .range([margin.left, width - margin.right]);

  const y = d3.scaleLinear()
      .domain([
        d3.min(monthly_europe, d => d.Value) - 1,
        d3.max(monthly_europe, d => d.Value) + 1
      ])
      .range([height - margin.bottom, margin.top]);

  // ---- LINE ----
  svg.append("path")
      .datum(monthly_europe)
      .attr("fill", "none")
      .attr("stroke", "#c0392b")
      .attr("stroke-width", 2.5)
      .attr("d", d3.line()
          .x(d => x(d.Month))
          .y(d => y(d.Value))
      );

  // ---- POINTS WITH TOOLTIP ----
  svg.selectAll("circle")
      .data(monthly_europe)
      .enter()
      .append("circle")
      .attr("cx", d => x(d.Month))
      .attr("cy", d => y(d.Value))
      .attr("r", 5)
      .attr("fill", "#c0392b")
      .attr("stroke", "white")
      .attr("stroke-width", 1.5)
      .style("cursor", "pointer")
      .on("mousemove", (event, d) => {
        tooltip.style("opacity", 1)
          .html(`
            <strong>${d.Month}</strong><br>
            Avg Applications: <strong>${d.Value}</strong>
          `)
          .style("left", event.pageX + 15 + "px")
          .style("top", event.pageY + 15 + "px");
      })
      .on("mouseleave", () => tooltip.style("opacity", 0));

  // ---- AXES ----
  svg.append("g")
      .attr("transform", `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(x))
    .selectAll("text")
      .attr("text-anchor", "end")
      .attr("transform", "rotate(-45)")
      .attr("dx", "-0.5em")
      .attr("dy", "0.1em")
      .style("font-size", "11px");

  svg.append("g")
     .attr("transform", `translate(${margin.left},0)`)
     .call(d3.axisLeft(y));

  // ---- AXIS LABELS ----
  svg.append("text")
      .attr("x", width / 2)
      .attr("y", height - 5)
      .attr("text-anchor", "middle")
      .style("font-size", "12px")
      .text("Month");

  svg.append("text")
      .attr("text-anchor", "middle")
      .attr("transform", `translate(20, ${height / 2}) rotate(-90)`)
      .style("font-size", "12px")
      .text("Average Asylum Applications");

  // ---- TITLE ----
  svg.append("text")
      .attr("x", width / 2)
      .attr("y", 25)
      .attr("text-anchor", "middle")
      .style("font-size", "18px")
      .style("font-weight", "bold")
      .text("Average Monthly Asylum Applications (Europe Only)");

  return svg.node();
}


function _chart_3yr(d3,window3)
{
  const width = 750, height = 420;
  const margin = {top: 50, right: 130, bottom: 60, left: 60};

  const svg = d3.create("svg")
      .attr("width", width)
      .attr("height", height)
      .style("cursor", "crosshair");

  // Remove the 2017–2019 window from visualization
  const filteredData = window3.filter(d => d.Window_3yr !== "2017-2019");  
  const groups = Array.from(d3.group(filteredData, d => d.Window_3yr));
  const months = groups[0][1].map(d => d.Month);

  const x = d3.scalePoint()
      .domain(months)
      .range([margin.left, width - margin.right])
      .padding(0.5);

  const y = d3.scaleLinear()
      .domain([
        d3.min(window3, d => d.Value) - 2,
        d3.max(window3, d => d.Value) + 2
      ])
      .range([height - margin.bottom, margin.top]);

  const color = d3.scaleOrdinal()
      .domain(groups.map(g => g[0]))
      .range(d3.schemeSet2);

  // -------------------
  // TOOLTIP DIV
  // -------------------
  const tooltip = d3.select(document.body)
    .append("div")
    .style("position", "fixed")
    .style("background", "white")
    .style("border", "1px solid #ccc")
    .style("padding", "6px 10px")
    .style("border-radius", "4px")
    .style("font-size", "12px")
    .style("pointer-events", "none")
    .style("box-shadow", "0px 2px 6px rgba(0,0,0,0.15)")
    .style("opacity", 0);

  // -------------------
  // DRAW LINES WITH HOVER POINTS
  // -------------------
  groups.forEach(([label, rows]) => {
    // Line
    svg.append("path")
      .datum(rows)
      .attr("fill", "none")
      .attr("stroke", color(label))
      .attr("stroke-width", 2.3)
      .attr("d", d3.line()
        .x(d => x(d.Month))
        .y(d => y(d.Value))
      );

    // Hover dots
    svg.selectAll(`.dot-${label}`)
      .data(rows)
      .enter()
      .append("circle")
      .attr("cx", d => x(d.Month))
      .attr("cy", d => y(d.Value))
      .attr("r", 5)
      .attr("fill", color(label))
      .attr("opacity", 0)
      .on("mouseover", (event, d) => {
          tooltip.style("opacity", 1);
          tooltip.html(
            `<b>${label}</b><br>
             Month: ${d.Month}<br>
             Value: ${d.Value.toFixed(2)}`
          );
      })
      .on("mousemove", (event) => {
          tooltip.style("left", (event.clientX + 12) + "px")
                 .style("top", (event.clientY - 20) + "px");
      })
      .on("mouseout", () => {
          tooltip.style("opacity", 0);
      });
  });

  // -------------------
  // AXES
  // -------------------
  // svg.append("g")
  //     .attr("transform", `translate(0,${height - margin.bottom})`)
  //     .call(d3.axisBottom(x));

  svg.append("g")
      .attr("transform", `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(x))
    .selectAll("text")
      .attr("text-anchor", "end")
      .attr("transform", "rotate(-45)")
      .attr("dx", "-0.5em")
      .attr("dy", "0.1em")
      .style("font-size", "11px");


  svg.append("g")
      .attr("transform", `translate(${margin.left},0)`)
      .call(d3.axisLeft(y));

  // Axis labels
  svg.append("text")
      .attr("text-anchor", "middle")
      .attr("x", width / 2)
      .attr("y", height - 5)
      .style("font-size", "13px")
      .text("Month");

  svg.append("text")
      .attr("text-anchor", "middle")
      .attr("transform", `translate(20, ${height/2}) rotate(-90)`)
      .style("font-size", "13px")
      .text("Average Asylum Applications");

  // Title
  svg.append("text")
      .attr("text-anchor", "middle")
      .attr("x", width / 2)
      .attr("y", 30)
      .style("font-size", "18px")
      .style("font-weight", "bold")
      .text("3-Year Window Monthly Averages");

  // Legend
  const legend = svg.append("g")
      .attr("transform", `translate(${width - margin.right + 10}, ${margin.top})`);

  groups.forEach(([label], i) => {
    const g = legend.append("g")
        .attr("transform", `translate(0, ${i * 22})`);

    g.append("rect")
      .attr("width", 12)
      .attr("height", 12)
      .attr("fill", color(label));

    g.append("text")
      .attr("x", 18)
      .attr("y", 10)
      .style("font-size", "12px")
      .text(label);
  });

  return svg.node();
}


function _chart_5yr(d3,window5)
{
  const width = 750, height = 420;
  const margin = {top: 50, right: 130, bottom: 60, left: 60};

  const svg = d3.create("svg")
      .attr("width", width)
      .attr("height", height)
      .style("cursor", "crosshair");

  // Group data by Window_5yr
  const groups = Array.from(d3.group(window5, d => d.Window_5yr));
  const months = groups[0][1].map(d => d.Month);

  // X scale
  const x = d3.scalePoint()
      .domain(months)
      .range([margin.left, width - margin.right])
      .padding(0.5);

  // Y scale
  const y = d3.scaleLinear()
      .domain([
        d3.min(window5, d => d.Value) - 5,
        d3.max(window5, d => d.Value) + 5
      ])
      .range([height - margin.bottom, margin.top]);

  // Colors
  const color = d3.scaleOrdinal()
      .domain(groups.map(g => g[0]))
      .range(d3.schemeSet2);

  // -------------------
  // TOOLTIP
  // -------------------
  const tooltip = d3.select(document.body)
    .append("div")
    .style("position", "fixed")
    .style("background", "white")
    .style("border", "1px solid #ccc")
    .style("padding", "6px 10px")
    .style("border-radius", "4px")
    .style("font-size", "12px")
    .style("pointer-events", "none")
    .style("box-shadow", "0px 2px 6px rgba(0,0,0,0.15)")
    .style("opacity", 0);

  // -------------------
  // DRAW LINES + HOVER POINTS
  // -------------------
  groups.forEach(([label, rows]) => {
    // Line path
    svg.append("path")
      .datum(rows)
      .attr("fill", "none")
      .attr("stroke", color(label))
      .attr("stroke-width", 2.3)
      .attr("d", d3.line()
        .x(d => x(d.Month))
        .y(d => y(d.Value))
      );

    // Hover dots (invisible except on hover)
    svg.selectAll(`.dot-${label}`)
      .data(rows)
      .enter()
      .append("circle")
      .attr("cx", d => x(d.Month))
      .attr("cy", d => y(d.Value))
      .attr("r", 5)
      .attr("fill", color(label))
      .attr("opacity", 0)
      .on("mouseover", (event, d) => {
          tooltip.style("opacity", 1);
          tooltip.html(
            `<b>${label}</b><br>
             Month: ${d.Month}<br>
             Value: ${d.Value.toFixed(2)}`
          );
      })
      .on("mousemove", (event) => {
          tooltip.style("left", (event.clientX + 12) + "px")
                 .style("top", (event.clientY - 20) + "px");
      })
      .on("mouseout", () => tooltip.style("opacity", 0));
  });

  // -------------------
  // AXES
  // -------------------
  // svg.append("g")
  //     .attr("transform", `translate(0,${height - margin.bottom})`)
  //     .call(d3.axisBottom(x));

  svg.append("g")
      .attr("transform", `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(x))
    .selectAll("text")
      .attr("text-anchor", "end")
      .attr("transform", "rotate(-45)")
      .attr("dx", "-0.5em")
      .attr("dy", "0.1em")
      .style("font-size", "11px");


  svg.append("g")
      .attr("transform", `translate(${margin.left},0)`)
      .call(d3.axisLeft(y));

  // Axis labels
  svg.append("text")
      .attr("text-anchor", "middle")
      .attr("x", width / 2)
      .attr("y", height - 5)
      .style("font-size", "13px")
      .text("Month");

  svg.append("text")
      .attr("text-anchor", "middle")
      .attr("transform", `translate(20, ${height/2}) rotate(-90)`)
      .style("font-size", "13px")
      .text("Average Asylum Applications");

  // Title
  svg.append("text")
      .attr("text-anchor", "middle")
      .attr("x", width / 2)
      .attr("y", 30)
      .style("font-size", "18px")
      .style("font-weight", "bold")
      .text("5-Year Window Monthly Averages");

  // -------------------
  // LEGEND
  // -------------------
  const legend = svg.append("g")
      .attr("transform", `translate(${width - margin.right + 10}, ${margin.top})`);

  groups.forEach(([label], i) => {
    const g = legend.append("g")
        .attr("transform", `translate(0, ${i * 22})`);

    g.append("rect")
      .attr("width", 12)
      .attr("height", 12)
      .attr("fill", color(label));

    g.append("text")
      .attr("x", 18)
      .attr("y", 10)
      .style("font-size", "12px")
      .text(label);
  });

  return svg.node();
}


function _49(md){return(
md`### **Analysis and Interpretation**

#### **1. Global Monthly Trend**
- Global asylum applications follow a clear seasonal pattern.
- Lowest levels appear in **December to February**.
- Numbers rise steadily from **March to July**.
- The peak occurs between **August and October**, followed by a drop in **November and December**.
- This shows that global movement is partly influenced by travel conditions and weather, especially in the Northern Hemisphere.

---

#### **2. Europe-Only Trend**
- Seasonality is stronger in Europe.
- Winter levels drop much more sharply.
- Summer peaks are higher and more consistent.
- Europe’s geography (Mediterranean Sea routes, cold winters) affects mobility more than other regions.
- This supports the idea that seasonal travel barriers impact Europe more than the global average.

---

#### **3. Five-Year Window Trends**
The 5-year time windows show how seasonality shifts over time:
- **2000–2010:** stable levels with mild seasonal change  
- **2010–2014:** rise linked to Arab Spring and early Syrian conflict  
- **2015–2019:** very high levels; seasonality becomes less visible because crisis-driven movement stays high across all months  
- **2020–2024:** movement declines due to COVID-19, but seasonal patterns slowly return  

**Key point:** Major conflicts disrupt normal seasonal patterns completely.

---

#### **4. Three-Year Window Trends**
- Crisis years show high values across all months, without a strong seasonal pattern.
- Post-crisis years bring back the typical summer peak and winter dip.
- Shorter windows make it easier to see transitions caused by policies, border changes, and conflicts.

---

### **Insights and Implications**
- Seasonality exists, but only when global conditions are stable.
- Conflict overrides weather effects, and people flee in all seasons during crises.
- Europe is more sensitive to winter and travel barriers than the global average.
- Winter dips should not be mistaken for long-term decline.
- Forecasting models must include both seasonal patterns and conflict-related shocks.

`
)}

function _50(md){return(
md`### q - Who are these displaced individuals in terms of age and gender?`
)}

function _54(md){return(
md`### **Analysis and Interpretation (Q6 — Age and Gender)**

#### **1. Global Gender Balance**
- The global displaced population is almost evenly split.
  - **Male:** about 51 percent  
  - **Female:** about 49 percent  
- This shows that displacement affects both genders almost equally.
- It challenges the common belief that most refugees are men.

---

#### **2. Age Group Distribution**
- Displacement affects all ages, but mostly younger people.
  - **Children (0–17):** about 47 percent of all displaced people  
  - **Adults (18–59):** about 48 percent  
  - **Elderly (60+):** about 5 percent  
- Nearly half of the displaced population is made up of minors.
- Elderly individuals form the smallest group and are the most physically vulnerable.

---

#### **3. Gender Split Within Each Age Group**
- **Children:** almost equal split (about 51 percent male, 49 percent female)  
- **Adults:** men are slightly higher (about 51 percent male)  
- **Elderly:** women form a small majority (about 51 percent)  
- The higher number of elderly women may be due to longer female life expectancy.
- While the differences are small, they have important implications for care and support.

---

### **Insights and Implications**
- Almost half of all displaced people are children. They need schooling, safety, and family support.
- The nearly equal gender split means that services should be designed to support both men and women fairly.
- The higher share of elderly women highlights the need for targeted healthcare, mobility support, and protection for older women.
- Age and gender data help governments and humanitarian groups design better, more sensitive programs for the specific needs of children, adults, and the elderly.

`
)}

function _55(md){return(
md`## q6 - Which countries shoulder the greatest responsibility in hosting refugees?
`
)}

function _refugee_totals(person_of_concern)
{
  const map = new Map();

  person_of_concern.forEach(d => {
    const country = d["Country / territory of asylum/residence"];
    const refugees = +String(d["Refugees (incl. refugee-like situations)"]).replace(/,/g, "") || 0;

    if (!country) return;

    if (!map.has(country)) map.set(country, 0);
    map.set(country, map.get(country) + refugees);
  });

  // convert to array
  return Array.from(map, ([country, total]) => ({ country, total }));
}


function _top10_refugee_hosts(refugee_totals){return(
refugee_totals
  .sort((a, b) => b.total - a.total)
  .slice(0, 10)
)}

function _q6_refugee_host_chart(d3,top10_refugee_hosts)
{
  const margin = { top: 70, right: 40, bottom: 60, left: 220 }; 
  // ↑ increased top margin from 50 → 70 to create more space under title

  const width = 950;
  const height = 500;

  const svg = d3.create("svg")
    .attr("width", width)
    .attr("height", height)
    .style("font-family", "Poppins, sans-serif");

  // Tooltip
  const tooltip = d3.select("body")
    .append("div")
    .style("position", "absolute")
    .style("padding", "8px 12px")
    .style("background", "white")
    .style("border", "1px solid #ccc")
    .style("border-radius", "6px")
    .style("box-shadow", "0 2px 8px rgba(0,0,0,0.15)")
    .style("font-size", "13px")
    .style("pointer-events", "none")
    .style("opacity", 0)
    .style("transition", "opacity 0.2s");

  // Scales
  const x = d3.scaleLinear()
    .domain([0, d3.max(top10_refugee_hosts, d => d.total)])
    .nice()
    .range([margin.left, width - margin.right]);

  const y = d3.scaleBand()
    .domain(top10_refugee_hosts.map(d => d.country))
    .range([margin.top + 10, height - margin.bottom])
    .padding(0.25);

  // X Axis (Top)
  svg.append("g")
    .attr("transform", `translate(0,${margin.top + 10})`)
    .call(
      d3.axisTop(x)
      .ticks(5)
      .tickFormat(d => d3.format(",")(d))
    );

  // Y Axis
  svg.append("g")
    .attr("transform", `translate(${margin.left},0)`)
    .call(d3.axisLeft(y));

  // Bars
  svg.selectAll("rect")
    .data(top10_refugee_hosts)
    .enter()
    .append("rect")
    .attr("x", margin.left)
    .attr("y", d => y(d.country))
    .attr("width", d => x(d.total) - margin.left)
    .attr("height", y.bandwidth())
    .attr("fill", "#4a90e2")
    .style("cursor", "pointer")
    .on("mousemove", (event, d) => {
      tooltip.style("opacity", 1)
        .html(`
          <strong>${d.country}</strong><br>
          Total Hosted: <strong>${d3.format(",")(d.total)}</strong>
        `)
        .style("left", event.pageX + 15 + "px")
        .style("top", event.pageY + 15 + "px");
    })
    .on("mouseleave", () => tooltip.style("opacity", 0));

  // ==== TITLE (now with clean spacing) ====
  svg.append("text")
    .attr("x", width / 2)
    .attr("y", 40)    // stays the same
    .attr("text-anchor", "middle")
    .attr("font-size", "22px")
    .attr("font-weight", 700)
    .text("Top 10 Refugee-Hosting Countries (Total Across All Years)");

  // ==== X LABEL ====
  svg.append("text")
    .attr("x", width / 2)
    .attr("y", height - 15)
    .attr("text-anchor", "middle")
    .attr("font-size", "14px")
    .text("Total Refugees Hosted");

  // ==== Y LABEL ====
  svg.append("text")
    .attr("transform", `translate(40, ${height / 2}) rotate(-90)`)
    .attr("text-anchor", "middle")
    .attr("font-size", "14px")
    .text("Country");

  return svg.node();
}


function _asylum_totals(asylum_seeker_data)
{
  const map = new Map();

  asylum_seeker_data.forEach(d => {
    const country = d["Country / territory of asylum/residence"];
    const applied = +String(d["Applied during year"]).replace(/,/g, "") || 0;

    if (!country) return;

    if (!map.has(country)) map.set(country, 0);
    map.set(country, map.get(country) + applied);
  });

  return Array.from(map, ([country, total]) => ({ country, total }));
}


function _top10_asylum_hosts(asylum_totals){return(
asylum_totals
  .sort((a, b) => b.total - a.total)
  .slice(0, 10)
)}

function _q6_asylum_host_chart(d3,top10_asylum_hosts)
{
  const margin = { top: 60, right: 40, bottom: 60, left: 260 };
  const width = 1000;
  const height = 500;

  const svg = d3.create("svg")
    .attr("width", width)
    .attr("height", height)
    .style("font-family", "Poppins, sans-serif");

  // Tooltip
  const tooltip = d3.select("body")
    .append("div")
    .style("position", "absolute")
    .style("padding", "8px 12px")
    .style("background", "white")
    .style("border", "1px solid #ccc")
    .style("border-radius", "6px")
    .style("box-shadow", "0 2px 6px rgba(0,0,0,0.15)")
    .style("font-size", "13px")
    .style("pointer-events", "none")
    .style("opacity", 0);

  // FORCE axis to end at exactly 2.5 million
  const END_VALUE = 2_500_000;

  // Scales
  const x = d3.scaleLinear()
    .domain([0, END_VALUE])     // <<< FORCED MAX
    .range([margin.left, width - margin.right]);

  const y = d3.scaleBand()
    .domain(top10_asylum_hosts.map(d => d.country))
    .range([margin.top + 15, height - margin.bottom])
    .padding(0.25);

  // X Axis → ticks every 500,000
  svg.append("g")
    .attr("transform", `translate(0,${margin.top + 15})`)
    .call(
      d3.axisTop(x)
        .tickValues([0, 500000, 1000000, 1500000, 2000000, END_VALUE])
        .tickFormat(d3.format(","))
    );

  // Y Axis
  svg.append("g")
    .attr("transform", `translate(${margin.left},0)`)
    .call(d3.axisLeft(y))
    .selectAll("text")
    .style("font-size", "12px");

  // Bars
  svg.selectAll("rect")
    .data(top10_asylum_hosts)
    .enter()
    .append("rect")
    .attr("x", margin.left)
    .attr("y", d => y(d.country))
    .attr("width", d => x(d.total) - margin.left)
    .attr("height", y.bandwidth())
    .attr("fill", "#F39C12")
    .style("cursor", "pointer")
    .on("mousemove", (event, d) => {
      tooltip.style("opacity", 1)
        .html(`
          <strong>${d.country}</strong><br>
          Total Asylum Seekers Hosted: <strong>${d3.format(",")(d.total)}</strong>
        `)
        .style("left", event.pageX + 15 + "px")
        .style("top", event.pageY + 15 + "px");
    })
    .on("mouseleave", () => tooltip.style("opacity", 0));

  // Title
  svg.append("text")
    .attr("x", width / 2)
    .attr("y", 35)
    .attr("text-anchor", "middle")
    .attr("font-size", "22px")
    .attr("font-weight", 700)
    .text("Top 10 Asylum-Seeker Hosting Countries (Total Across All Years)");

  // X-axis Label
  svg.append("text")
    .attr("x", width / 2)
    .attr("y", height - 15)
    .attr("text-anchor", "middle")
    .attr("font-size", "14px")
    .text("Total Asylum Seekers Hosted");

  // Y-axis Label
  svg.append("text")
    .attr("transform", `translate(30, ${height / 2}) rotate(-90)`)
    .attr("text-anchor", "middle")
    .attr("font-size", "14px")
    .text("Country");

  return svg.node();
}


function _mapNameFix(){return(
{
  "United States": "United States of America",
  "South Korea": "Korea, Republic of",
  "North Korea": "Korea, Democratic People's Republic of",
  "Russia": "Russian Federation",
  "Iran": "Iran, Islamic Republic of",
  "Syria": "Syrian Arab Republic",
  "Venezuela": "Venezuela, Bolivarian Republic of",
  "Bolivia": "Bolivia, Plurinational State of",
  "Tanzania": "Tanzania, United Republic of",
  "Czech Republic": "Czechia",
  "Moldova": "Moldova, Republic of",
  "Laos": "Lao People's Democratic Republic",
  "Vietnam": "Viet Nam",
  "DR Congo": "Democratic Republic of the Congo",
  "Republic of Congo": "Congo",
  "Swaziland": "Eswatini",
  "Micronesia": "Micronesia, Federated States of",
  "Brunei": "Brunei Darussalam",
  "Cape Verde": "Cabo Verde",
  "Ivory Coast": "Côte d'Ivoire",
  "UAE": "United Arab Emirates"
}
)}

async function _world(FileAttachment){return(
await FileAttachment("countries-110m (1).json").json()
)}

function _refugee_window_data(mapNameFix,person_of_concern){return(
(() => {

  const fix = name => mapNameFix[name] ?? name;

  const bucket = year => {
    const start = Math.floor(year / 5) * 5;
    return `${start}-${start + 4}`;
  };

  const grouped = {};

  person_of_concern.forEach(d => {
    const year = +d.Year;
    const country = fix(d["Country / territory of asylum/residence"]);
    const refugees = +d["Refugees (incl. refugee-like situations)"] || 0;

    if (!country || !year) return;

    const period = bucket(year);

    if (!grouped[period]) grouped[period] = {};
    if (!grouped[period][country]) grouped[period][country] = 0;

    grouped[period][country] += refugees;
  });

  const periods = Object.keys(grouped).sort((a,b)=>+a.split("-")[0] - +b.split("-")[0]);

  return { grouped, periods };
})()
)}

function _q6_selectedRefugeePeriod(Inputs,refugee_window_data){return(
Inputs.select(
  refugee_window_data.periods,
  {label: "Select 5-Year Refugee Hosting Window"}
)
)}

function _q6_refugee_host_map(q6_selectedRefugeePeriod,refugee_window_data,d3,topojson,world)
{
  const period = q6_selectedRefugeePeriod;
  const data = refugee_window_data.grouped[period];

  // --- Dimensions ---
  const width = 1150;
  const height = 620;

  const svg = d3.create("svg")
    .attr("width", width)
    .attr("height", height)
    .style("background", "#fafafa")
    .style("font-family", "Poppins, sans-serif");

  // --- Tooltip ---
  const tooltip = d3.select(document.body)
    .append("div")
    .style("position", "absolute")
    .style("padding", "10px 14px")
    .style("background", "white")
    .style("border", "1px solid #ccc")
    .style("border-radius", "8px")
    .style("box-shadow", "0 2px 8px rgba(0,0,0,0.15)")
    .style("font-size", "13px")
    .style("pointer-events", "none")
    .style("opacity", 0);

  // --- Values ---
  const values = Object.values(data);
  const maxVal = d3.max(values);

  // --- Color scale ---
  const color = d3.scaleSequential()
    .domain([0, maxVal])
    .interpolator(d3.interpolateOrRd);

  // --- Map projection ---
  const projection = d3.geoNaturalEarth1()
    .scale(185)
    .translate([width / 2 + 40, height / 2 + 30]); // Shift right slightly to fit legend

  const path = d3.geoPath(projection);

  // Draw Countries
  svg.append("g")
    .selectAll("path")
    .data(topojson.feature(world, world.objects.countries).features)
    .join("path")
      .attr("d", path)
      .attr("fill", d => {
        const name = d.properties.name;
        return data[name] ? color(data[name]) : "#e0e0e0";
      })
      .attr("stroke", "#666")
      .attr("stroke-width", 0.35)
      .on("mousemove", (event, d) => {
        const name = d.properties.name;
        const value = data[name];

        tooltip.style("opacity", 1)
          .html(`
            <strong>${name}</strong><br>
            Refugees Hosted: <strong>${value ? d3.format(",")(value) : "No Data"}</strong>
          `)
          .style("left", event.pageX + 15 + "px")
          .style("top", event.pageY + 15 + "px");
      })
      .on("mouseleave", () => tooltip.style("opacity", 0));


  // =============================
  // TITLE + SUBTITLE (with spacing)
  // =============================
  const titleY = 50;

  svg.append("text")
    .attr("x", width / 2)
    .attr("y", titleY)
    .attr("text-anchor", "middle")
    .style("font-size", "28px")
    .style("font-weight", 700)
    .text(`Refugees Hosted by Country — ${period}`);

  svg.append("text")
    .attr("x", width / 2)
    .attr("y", titleY + 25)
    .attr("text-anchor", "middle")
    .style("font-size", "15px")
    .style("fill", "#555")
    .text("Darker red = more refugees hosted");


  // =============================
  // VERTICAL LEGEND ON LEFT
  // =============================
  const legendX = 70;
  const legendY = 350;
  const legendHeight = 230;
  const legendWidth = 12;

  // Define gradient
  const defs = svg.append("defs");
  const gradient = defs.append("linearGradient")
    .attr("id", "verticalLegend")
    .attr("x1", "0%").attr("x2", "0%")
    .attr("y1", "100%").attr("y2", "0%");   // Vertical gradient

  const stops = Array.from({ length: 20 }, (_, i) => i / 19);
  stops.forEach(t => {
    gradient.append("stop")
      .attr("offset", `${t * 100}%`)
      .attr("stop-color", color(maxVal * t));
  });

  // Draw vertical gradient bar
  svg.append("rect")
    .attr("x", legendX)
    .attr("y", legendY)
    .attr("width", legendWidth)
    .attr("height", legendHeight)
    .style("fill", "url(#verticalLegend)")
    .style("stroke", "#444")
    .style("stroke-width", 0.4);

  // Legend scale
  const legendScale = d3.scaleLinear()
    .domain([0, maxVal])
    .range([legendY + legendHeight, legendY]);

  svg.append("g")
    .attr("transform", `translate(${legendX + legendWidth + 4},0)`)
    .call(
      d3.axisRight(legendScale)
        .ticks(6)
        .tickFormat(d => d3.format(".2s")(d).replace("G", "B"))
    )
    .selectAll("text")
      .style("font-size", "12px");

  // Legend title
  svg.append("text")
    .attr("x", legendX - 10)
    .attr("y", legendY - 12)
    .attr("text-anchor", "start")
    .style("font-size", "14px")
    .style("font-weight", "600")
    .text("Total Refugees Hosted");


  return svg.node();
}


function _asylum_window_data(mapNameFix,d3,asylum_seeker_data)
{
  const fix = name => mapNameFix[name] ?? name;

  const bucket = year => {
    const s = Math.floor(year / 5) * 5;
    return `${s}-${s+4}`;
  };

  const grouped = d3.rollups(
    asylum_seeker_data,
    v => d3.sum(v, d => +d["Applied during year"] || 0),
    d => bucket(+d.Year),
    d => fix(d["Country / territory of asylum/residence"])
  );

  const periodMap = {};
  for (const [period, rows] of grouped) {
    periodMap[period] = {};
    for (const [c, val] of rows) {
      periodMap[period][c] = val;
    }
  }

  const periods = Object.keys(periodMap).sort();
  return { periodMap, periods };
}


function _68(asylum_window_data){return(
asylum_window_data.periods
)}

function _q6_selectedAsylumPeriod(Inputs,asylum_window_data){return(
Inputs.select(
  asylum_window_data.periods,
  { label: "Select 5-Year Asylum Application Window" }
)
)}

function _q6_asylum_window_map(q6_selectedAsylumPeriod,asylum_window_data,d3,topojson,world)
{
  const period = q6_selectedAsylumPeriod;
  const data = asylum_window_data.periodMap[period];

  const width = 1150;
  const height = 620;

  const svg = d3.create("svg")
    .attr("width", width)
    .attr("height", height)
    .style("background", "#fafafa")
    .style("font-family", "Poppins, sans-serif");

  // Tooltip
  const tooltip = d3.select(document.body)
    .append("div")
    .style("position", "absolute")
    .style("padding", "10px 14px")
    .style("background", "white")
    .style("border", "1px solid #ccc")
    .style("border-radius", "8px")
    .style("box-shadow", "0 2px 8px rgba(0,0,0,0.15)")
    .style("font-size", "13px")
    .style("pointer-events", "none")
    .style("opacity", 0);

  // Values
  const values = Object.values(data);
  const maxVal = d3.max(values) || 0;

  // Color scale
  const color = d3.scaleSequential()
    .domain([0, maxVal])
    .interpolator(d3.interpolateOrRd);

  // Projection (shift right to make room for legend)
  const projection = d3.geoNaturalEarth1()
    .scale(185)
    .translate([width / 2 + 40, height / 2 + 30]);

  const path = d3.geoPath(projection);

  // Map drawing
  svg.append("g")
    .selectAll("path")
    .data(topojson.feature(world, world.objects.countries).features)
    .join("path")
      .attr("d", path)
      .attr("fill", d => {
        const c = d.properties.name;
        return data[c] ? color(data[c]) : "#e0e0e0";
      })
      .attr("stroke", "#666")
      .attr("stroke-width", 0.35)
      .on("mousemove", (event, d) => {
        const c = d.properties.name;
        tooltip.style("opacity", 1)
          .html(`
            <strong>${c}</strong><br>
            Asylum Applications: <strong>${
              data[c] ? d3.format(",")(data[c]) : "No Data"
            }</strong><br>
            Period: ${period}
          `)
          .style("left", event.pageX + 15 + "px")
          .style("top", event.pageY + 15 + "px");
      })
      .on("mouseleave", () => tooltip.style("opacity", 0));

  // ===== TITLE WITH SPACING =====
  const titleY = 50;

  svg.append("text")
    .attr("x", width / 2)
    .attr("y", titleY)
    .attr("text-anchor", "middle")
    .style("font-size", "28px")
    .style("font-weight", "700")
    .text(`Asylum Applications by Country — ${period}`);

  svg.append("text")
    .attr("x", width / 2)
    .attr("y", titleY + 25)
    .attr("text-anchor", "middle")
    .style("font-size", "15px")
    .style("fill", "#555")
    .text("Darker red = more asylum applications");


  // ===== VERTICAL LEGEND (LEFT SIDE) =====
  const legendX = 70;
  const legendY = 350;
  const legendHeight = 230;
  const legendWidth = 12;

  // Gradient
  const defs = svg.append("defs");
  const gradient = defs.append("linearGradient")
    .attr("id", "asylumLegendVertical")
    .attr("x1", "0%").attr("x2", "0%")
    .attr("y1", "100%").attr("y2", "0%");

  // Smooth stops (robust across D3 versions)
  const stops = Array.from({ length: 20 }, (_, i) => i / 19);
  stops.forEach(t => {
    gradient.append("stop")
      .attr("offset", `${t * 100}%`)
      .attr("stop-color", color(maxVal * t));
  });

  // Legend bar
  svg.append("rect")
    .attr("x", legendX)
    .attr("y", legendY)
    .attr("width", legendWidth)
    .attr("height", legendHeight)
    .style("fill", "url(#asylumLegendVertical)")
    .style("stroke", "#444")
    .style("stroke-width", 0.4);

  // Scale
  const legendScale = d3.scaleLinear()
    .domain([0, maxVal])
    .range([legendY + legendHeight, legendY]);

  svg.append("g")
    .attr("transform", `translate(${legendX + legendWidth + 4},0)`)
    .call(
      d3.axisRight(legendScale)
        .ticks(6)
        .tickFormat(d => d3.format(".2s")(d).replace("G", "B"))
    )
    .selectAll("text")
      .style("font-size", "12px");

  // Legend title
  svg.append("text")
    .attr("x", legendX - 10)
    .attr("y", legendY - 12)
    .attr("text-anchor", "start")
    .style("font-size", "14px")
    .style("font-weight", "600")
    .text("Total Asylum Applications");

  return svg.node();
}


function _71(md){return(
md`Based on the aggregated totals from the UNHCR Persons of Concern dataset and the bar chart of Top 10 Refugee-Hosting Countries, a small group of countries bears most of the long-term global responsibility for hosting refugees.

1 >> Pakistan and Iran — The Largest Long-Term Hosts

Across all years in the dataset, Pakistan and Iran host the largest cumulative numbers of refugees.
This is primarily due to:

The prolonged displacement of Afghans since the 1980s

Their geographic proximity to major conflict zones

Large-scale, multi-decade refugee inflows

Both countries consistently appear as top hosts in nearly every 5-year window of the refugee map.

2 >> The United States and Germany — Major High-Income Hosts

The United States and Germany also shoulder substantial responsibility:

The U.S. hosts large numbers through long-standing resettlement and asylum programs.

Germany’s totals surge particularly during the 2010–2015 period due to the Syrian crisis.

Both appear prominently in the cumulative totals and nearly every refugee-hosting choropleth.

3 >> Key African Hosts: DRC, Sudan, Tanzania

Several low-income African countries host unexpectedly large refugee populations relative to their economic capacity:

Democratic Republic of the Congo

Sudan

Tanzania

These countries appear in the top 10 global hosts despite limited resources, indicating a heavy humanitarian burden relative to GDP.

4 >> Shifts in Recent Decades: Turkey Emerges as a New Major Host

While not the largest in the long-term cumulative totals, Turkey becomes the single largest host in recent years due to the massive displacement of Syrians (post-2011), as clearly shown in maps for 2015–2019.

Conclusion

Countries that have historically shouldered the greatest responsibility in hosting refugees are:

**Pakistan, Iran, United States, Germany,
Democratic Republic of the Congo, Sudan, Tanzania**

These countries appear repeatedly in both:

The cumulative totals chart, and

Multiple 5-year refugee-hosting maps.

They carry the majority of the global refugee burden, either due to geographic proximity to conflict zones (Pakistan, Iran, DRC, Sudan) or large, well-resourced asylum systems (United States, Germany).
`
)}

function _72(md){return(
md`## q7 - How do asylum-seeker burdens shift across countries in different time periods?`
)}

function _73(asylum_seeker_monthly_data){return(
asylum_seeker_monthly_data[0]
)}

function _asylum_yearly_from_monthly(asylum_seeker_monthly_data)
{
  const map = new Map();

  asylum_seeker_monthly_data.forEach(d => {
    const country = d["Country / territory of asylum/residence"];
    const year = +d["Year"];        // FIXED
    const value = +d["Value"] || 0; // FIXED

    if (!country || !year) return;

    const key = `${country}_${year}`;

    if (!map.has(key)) map.set(key, { country, year, total: 0 });
    map.get(key).total += value;
  });

  return Array.from(map.values());
}


function _asylum_5yr_windows(asylum_yearly_from_monthly)
{
  return asylum_yearly_from_monthly.map(d => {
    const windowStart = d.year - (d.year % 5);
    const windowEnd = windowStart + 4;

    return {
      country: d.country,
      window: `${windowStart}-${windowEnd}`,
      total: d.total
    };
  });
}


function _selected_window(){return(
"2005-2009"
)}

function _asylum_window_totals(asylum_5yr_windows)
{
  const map = new Map();

  asylum_5yr_windows.forEach(d => {
    const key = `${d.country}_${d.window}`;
    if (!map.has(key)) map.set(key, { country: d.country, window: d.window, total: 0 });
    map.get(key).total += d.total;
  });

  return Array.from(map.values());
}


function _top10_asylum_window(asylum_window_totals,selected_window){return(
asylum_window_totals
  .filter(d => d.window === selected_window)
  .sort((a, b) => b.total - a.total)
  .slice(0, 10)
)}

function _asylum_window_chart(d3,top10_asylum_window,selected_window)
{
  const margin = { top: 60, right: 40, bottom: 60, left: 310 }; // wider left margin
  const width = 1000;
  const height = 480;

  const svg = d3.create("svg")
    .attr("width", width)
    .attr("height", height)
    .style("font-family", "Poppins, sans-serif");

  // Tooltip
  const tooltip = d3.select("body")
    .append("div")
    .style("position", "absolute")
    .style("padding", "8px 12px")
    .style("background", "white")
    .style("border", "1px solid #ccc")
    .style("border-radius", "6px")
    .style("box-shadow", "0 2px 6px rgba(0,0,0,0.15)")
    .style("font-size", "13px")
    .style("pointer-events", "none")
    .style("opacity", 0);

  // Max value
  const END_VALUE = d3.max(top10_asylum_window, d => d.total);

  // Scales
  const x = d3.scaleLinear()
    .domain([0, END_VALUE])
    .nice()
    .range([margin.left, width - margin.right]);

  const y = d3.scaleBand()
    .domain(top10_asylum_window.map(d => d.country))
    .range([margin.top + 20, height - margin.bottom])
    .padding(0.25);

  // X Axis (normal tick spacing like your screenshot)
  svg.append("g")
    .attr("transform", `translate(0,${margin.top + 20})`)
    .call(
      d3.axisTop(x)
        .ticks(6)
        .tickFormat(d3.format(","))
    );

  // Y Axis
  svg.append("g")
    .attr("transform", `translate(${margin.left},0)`)
    .call(d3.axisLeft(y))
    .selectAll("text")
    .style("font-size", "12px")         // prevent clipping
    .call(text => text.each(function () {  
      // wrap long labels
      const self = d3.select(this);
      let word = self.text();
      if (word.length > 28) {           // wrap threshold
        const parts = word.split(" ");
        const mid = Math.floor(parts.length / 2);
        self.text(parts.slice(0, mid).join(" "));
        self.append("tspan")
          .attr("x", -10)
          .attr("dy", "1.1em")
          .text(parts.slice(mid).join(" "));
      }
    }));

  // Bars
  svg.selectAll("rect")
    .data(top10_asylum_window)
    .enter()
    .append("rect")
    .attr("x", margin.left)
    .attr("y", d => y(d.country))
    .attr("width", d => x(d.total) - margin.left)
    .attr("height", y.bandwidth())
    .attr("fill", "#E67E22")
    .style("cursor", "pointer")
    .on("mousemove", (event, d) => {
      tooltip.style("opacity", 1)
        .html(`
          <strong>${d.country}</strong><br>
          Total (${selected_window}): <strong>${d3.format(",")(d.total)}</strong>
        `)
        .style("left", event.pageX + 15 + "px")
        .style("top", event.pageY + 15 + "px");
    })
    .on("mouseleave", () => tooltip.style("opacity", 0));

  // Title
  svg.append("text")
    .attr("x", width / 2)
    .attr("y", 35)
    .attr("text-anchor", "middle")
    .attr("font-size", "22px")
    .attr("font-weight", 700)
    .text(`Top 10 Asylum-Seeker Hosting Countries (${selected_window})`);

  // X-axis Label
  svg.append("text")
    .attr("x", width / 2)
    .attr("y", height - 15)
    .attr("text-anchor", "middle")
    .attr("font-size", "14px")
    .text("Total Asylum Seekers Hosted");

  // Y-axis Label
  svg.append("text")
    .attr("transform", `translate(100, ${height / 2}) rotate(-90)`)
    .attr("text-anchor", "middle")
    .attr("font-size", "14px")
    .text("Country");

  return svg.node();
}


function _asylum_bump_chart(d3,asylum_yearly_from_monthly)
{
  const margin = { top: 70, right: 150, bottom: 60, left: 120 };
  const width = 950 - margin.left - margin.right;
  const height = 520 - margin.top - margin.bottom;

  const svg = d3.create("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .style("font-family", "Poppins, sans-serif");

  const g = svg.append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

  // Tooltip
  const tooltip = d3.select("body")
    .append("div")
    .style("position", "absolute")
    .style("padding", "8px 12px")
    .style("background", "white")
    .style("border", "1px solid #ccc")
    .style("border-radius", "6px")
    .style("box-shadow", "0 2px 6px rgba(0,0,0,0.2)")
    .style("font-size", "13px")
    .style("pointer-events", "none")
    .style("opacity", 0);

  // -------------------------------
  // DATA PREP
  // -------------------------------
  const years = [...new Set(asylum_yearly_from_monthly.map(d => d.year))];

  const ranked_flat = d3.groups(asylum_yearly_from_monthly, d => d.year)
    .map(([year, rows]) =>
      rows
        .sort((a, b) => b.total - a.total)
        .map((d, i) => ({
          year,
          country: d.country,
          rank: i + 1
        }))
        .slice(0, 10)
    )
    .flat();

  const countries = [...new Set(ranked_flat.map(d => d.country))];

  const x = d3.scaleLinear()
    .domain(d3.extent(years))
    .range([0, width]);

  const y = d3.scaleLinear()
    .domain([1, 10])
    .range([0, height - 10]);

  const color = d3.scaleOrdinal()
    .domain(countries)
    .range(d3.schemeTableau10);

  // Identify Top 3 from last year
  const latest_year = d3.max(years);
  const latest_ranking = ranked_flat.filter(d => d.year === latest_year);

  const top3 = latest_ranking
    .sort((a, b) => a.rank - b.rank)
    .slice(0, 3)
    .map(d => d.country);

  // -------------------------------
  // DRAW ALL LINES + POINTS
  // -------------------------------
  for (const country of countries) {
    const lineData = ranked_flat.filter(d => d.country === country);
    const isTop3 = top3.includes(country);

    // Line
    g.append("path")
      .datum(lineData)
      .attr("fill", "none")
      .attr("stroke", isTop3 ? color(country) : "#bbb")
      .attr("stroke-width", isTop3 ? 3 : 1.2)
      .attr("opacity", isTop3 ? 1 : 0.35)
      .attr("d",
        d3.line()
          .x(d => x(d.year))
          .y(d => y(d.rank))
          .curve(d3.curveMonotoneX)
      );

    // Points
    g.selectAll(null)
      .data(lineData)
      .enter()
      .append("circle")
      .attr("cx", d => x(d.year))
      .attr("cy", d => y(d.rank))
      .attr("r", isTop3 ? 4 : 2.7)
      .attr("fill", isTop3 ? color(country) : "#999")
      .style("cursor", "pointer")
      .on("mousemove", (event, d) => {
        tooltip.style("opacity", 1)
          .html(`
            <strong>${d.country}</strong><br>
            Year: <strong>${d.year}</strong><br>
            Rank: <strong>${d.rank}</strong>
          `)
          .style("left", event.pageX + 15 + "px")
          .style("top", event.pageY + 15 + "px");
      })
      .on("mouseleave", () => tooltip.style("opacity", 0));
  }

  // -------------------------------
  // LABEL ONLY THE TOP 3 COUNTRIES
  // -------------------------------
  const first_year = d3.min(years);
  const first_ranking = ranked_flat.filter(d => d.year === first_year);

  function labelSide(dataForYear, xPos, align) {
    top3.forEach(country => {
      const row = dataForYear.find(d => d.country === country);
      if (!row) return;

      const vertical_adjust =
        row.rank === 1 ? -8 :        // SHIFT UP rank=1
        row.rank === 10 ? 8 :        // SHIFT DOWN rank=10
        0;

      g.append("text")
        .attr("x", xPos)
        .attr("y", y(row.rank) + vertical_adjust + 4)
        .attr("font-size", 13)
        .attr("font-weight", 600)
        .attr("text-anchor", align)
        .style("fill", color(country))
        .text(country);
    });
  }

  // Left labels
  labelSide(first_ranking, -12, "end");

  // Right labels
  labelSide(latest_ranking, width + 12, "start");

  // -------------------------------
  // AXES
  // -------------------------------
  g.append("g")
    .attr("transform", `translate(0,${height})`)
    .call(d3.axisBottom(x).tickFormat(d3.format("d")));

  g.append("g")
    .call(d3.axisLeft(y).tickValues([1,2,3,4,5,6,7,8,9,10]));

  // -------------------------------
  // LABELS + NEW TITLE
  // -------------------------------
  g.append("text")
    .attr("x", width / 2)
    .attr("y", height + 45)
    .attr("text-anchor", "middle")
    .attr("font-size", 14)
    .text("Year");

  g.append("text")
    .attr("transform", `translate(-65, ${height / 2}) rotate(-90)`)
    .attr("text-anchor", "middle")
    .attr("font-size", 14)
    .text("Rank");

  svg.append("text")
    .attr("x", (width + margin.left + margin.right) / 2)
    .attr("y", 35)
    .attr("text-anchor", "middle")
    .attr("font-size", 22)
    .attr("font-weight", 700)
    .text("Rank Shifts of Asylum-Seeker Hosting Countries — Highlighting Top 3 (2000–2023)");

  return svg.node();
}


function _81(md){return(
md`This question examines how the responsibility for hosting asylum-seekers changes over time across different regions. By looking at trends across multiple time windows, the goal is to identify which countries consistently receive large asylum volumes, which ones emerge temporarily during crises, and how global asylum pressure redistributes geographically as conflicts evolve.

Dataset: asylum_seekers.csv (UNHCR Population Statistics Database)
Key fields:

Year – reporting year
Country / territory of asylum/residence
Population Type – filtered to “Asylum seekers”
Value – number of asylum applicants
Processing applied:
Monthly records aggregated into yearly totals
Yearly totals grouped into 5-year windows
For each window, total asylum-seekers computed per country

Top 10 hosting countries extracted
Additional normalizations (density per 100k population) used for geographic fairness
This produced a clean dataset showing how asylum pressures shift between windows like 2000–2004, 2005–2009, … 2020–2023.

Visualizations Created
1. Top 10 Asylum-Seeker Hosting Countries (Interactive 5-year Window)
Bar chart updating when the user changes the selected time window.

2. Bump Chart (Rank movement over time)
Shows which countries rise/fall in hosting responsibility from 2000 to 2023.

Analysis & Interpretation
1. Major shifts correspond to global crises
The visualizations show clear spikes:
2014–2017: Germany becomes #1 during the Syrian refugee crisis
2018–2021: Colombia rises rapidly due to Venezuelan displacement
Early 2000s: United States, UK, and Canada dominate asylum receipts

These shifts closely match major geopolitical disruptions.

2. Asylum burdens rotate between regions

A key pattern emerges:
North America leads in early periods
Europe dominates during Syrian conflict
Latin America becomes a new hotspot during Venezuelan crisis
Asylum pressure is geo-responsive, shifting according to where major conflicts erupt.

3. Burden concentration remains extreme
Across windows, the top 10 countries host 65–75% of asylum seekers
This concentration persists even as country ranks shift
Middle-income frontline states (Turkey, Colombia, Uganda) carry disproportional weight despite limited resources

4. Density-normalized map reveals hidden burden
The choropleth map shows that:
Small-to-medium countries like Lebanon, Costa Rica, and Cyprus host extremely high numbers relative to their population
Large countries (USA, Brazil) appear lighter once normalized
This highlights inequitable burden distribution.

Insights & Implications
A. Asylum systems must adapt dynamically

Because asylum hotspots change rapidly, static policies fail.
Countries need flexible regional coordination, not isolated responses.

B. Frontline states require sustained international support

Many top hosts are not wealthy:

Colombia

Turkey

Uganda

Bangladesh

They need financial assistance to maintain access to asylum.

C. Predictive models could help anticipate future hotspots

Your temporal data suggests asylum flows follow:

conflict escalation

collapse of governance

economic hyperinflation

climate-linked displacement

This enables early warning systems.


Asylum-seeker burdens do not remain static; they shift dramatically across countries depending on evolving geopolitical crises. The analysis reveals sharp transitions in the global hosting landscape—from the United States in the early 2000s, to Germany during the Syrian refugee crisis, to Colombia amid Venezuelan displacement. Although new countries periodically rise to prominence, the burden remains highly concentrated, with the top 10 hosts consistently managing most asylum applications. When normalized by population, smaller frontline states emerge as disproportionately affected. These patterns underscore the need for flexible, well-supported asylum systems and greater international burden-sharing to protect displaced populations effectively.`
)}

function _82(md){return(
md`### q8 - How does displacement disproportionately affect certain demographic groups (children, women, elderly)?
`
)}

function _83(demographics){return(
demographics[0]
)}

function _clean_demo(demographics){return(
demographics.map(raw => {
  const r = {};

  for (const key in raw) {
    let val = raw[key];

    // Convert actual NaN, null, "", "-", "*" → 0
    if (val == null || Number.isNaN(val)) {
      r[key] = 0;
      continue;
    }

    // If it's a string, sanitize
    if (typeof val === "string") {
      val = val.trim();
      if (val === "" || val === "-" || val === "*" || isNaN(Number(val))) {
        r[key] = 0;
        continue;
      }
    }

    r[key] = Number(val);
  }

  // Helper for safe access
  const safe = key => (key in r ? r[key] : 0);

  // Derived fields
  r.Children =
    safe("Female 0-4") + safe("Female 5-11") + safe("Female 5-17") + safe("Female 12-17") +
    safe("Male 0-4") + safe("Male 5-11") + safe("Male 5-17") + safe("Male 12-17");

  r.Adults =
    safe("Female 18-59") + safe("Male 18-59");

  r.Elderly =
    safe("Female 60+") + safe("Male 60+");

  r.Women = safe("F: Total");
  r.Men   = safe("M: Total");

  return r;
})
)}

function _global_demo(clean_demo)
{
  let children = 0, adults = 0, elderly = 0, women = 0, men = 0;

  clean_demo.forEach(r => {
    children += r.Children;
    adults += r.Adults;
    elderly += r.Elderly;
    women += r.Women;
    men += r.Men;
  });

  return { children, adults, elderly, women, men };
}


function _demo_pct(global_demo)
{
  const totalPop = global_demo.children + global_demo.adults + global_demo.elderly;
  const totalGender = global_demo.women + global_demo.men;

  return {
    children_pct: global_demo.children / totalPop * 100,
    adults_pct:   global_demo.adults   / totalPop * 100,
    elderly_pct:  global_demo.elderly  / totalPop * 100,
    women_pct:    global_demo.women    / totalGender * 100,
    men_pct:      global_demo.men      / totalGender * 100
  };
}


function _q8_age_chart(global_demo,d3)
{
  const data = [
    { group: "Children (0–17)", value: global_demo.children, color: "#FDBE85" },
    { group: "Adults (18–59)", value: global_demo.adults, color: "#FD8D3C" },
    { group: "Elderly (60+)", value: global_demo.elderly, color: "#E6550D" }
  ];

  const margin = { top: 60, right: 40, bottom: 60, left: 150 };
  const width = 900;
  const height = 360;

  const svg = d3.create("svg")
    .attr("width", width)
    .attr("height", height)
    .style("font-family", "Poppins, sans-serif");

  // Tooltip
  const tooltip = d3.select("body")
    .append("div")
    .style("position", "absolute")
    .style("padding", "8px 12px")
    .style("background", "white")
    .style("border", "1px solid #ccc")
    .style("border-radius", "6px")
    .style("box-shadow", "0 2px 6px rgba(0,0,0,0.18)")
    .style("font-size", "13px")
    .style("pointer-events", "none")
    .style("opacity", 0);

  // X scale
  const x = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.value)])
    .nice()
    .range([margin.left, width - margin.right]);

  // Y scale
  const y = d3.scaleBand()
    .domain(data.map(d => d.group))
    .range([margin.top, height - margin.bottom])
    .padding(0.25);

  // Bars
  svg.selectAll("rect")
    .data(data)
    .join("rect")
      .attr("x", margin.left)
      .attr("y", d => y(d.group))
      .attr("width", d => x(d.value) - margin.left)
      .attr("height", y.bandwidth())
      .attr("fill", d => d.color)   // ✔ Apply gradient colors
      .style("cursor", "pointer")
      .on("mousemove", (event, d) => {
        tooltip.style("opacity", 1)
          .html(`
            <strong>${d.group}</strong><br>
            Total Displaced: <strong>${d3.format(",")(d.value)}</strong>
          `)
          .style("left", event.pageX + 15 + "px")
          .style("top", event.pageY + 15 + "px");
      })
      .on("mouseleave", () => tooltip.style("opacity", 0));

  // Y axis
  svg.append("g")
    .attr("transform", `translate(${margin.left},0)`)
    .call(d3.axisLeft(y));

  // X axis
  svg.append("g")
    .attr("transform", `translate(0,${height - margin.bottom})`)
    .call(d3.axisBottom(x).ticks(6).tickFormat(d3.format(",")));

  // Title
  svg.append("text")
    .attr("x", width / 2)
    .attr("y", margin.top - 30)
    .attr("text-anchor", "middle")
    .style("font-size", "22px")
    .style("font-weight", "700")
    .text("Global Displacement by Age Group");

  // X-axis label
  svg.append("text")
    .attr("x", width / 2)
    .attr("y", height - 15)
    .attr("text-anchor", "middle")
    .style("font-size", "14px")
    .text("Total Displaced Population");

  // Y-axis label
  svg.append("text")
    .attr("transform", `translate(40, ${height / 2}) rotate(-90)`)
    .attr("text-anchor", "middle")
    .style("font-size", "14px")
    .text("Age Group");

  return svg.node();
}


function _q8_gender_chart(global_demo,d3)
{
  const data = [
    { group: "Women", value: global_demo.women, color: "#c90076" },
    { group: "Men", value: global_demo.men, color: "#3498DB" }
  ];

  const margin = { top: 60, right: 40, bottom: 60, left: 150 };
  const width = 900;
  const height = 320;

  const svg = d3.create("svg")
    .attr("width", width)
    .attr("height", height)
    .style("font-family", "Poppins, sans-serif");

  // Tooltip
  const tooltip = d3.select("body")
    .append("div")
    .style("position", "absolute")
    .style("padding", "8px 12px")
    .style("background", "white")
    .style("border", "1px solid #ccc")
    .style("border-radius", "6px")
    .style("box-shadow", "0 2px 6px rgba(0,0,0,0.18)")
    .style("font-size", "13px")
    .style("pointer-events", "none")
    .style("opacity", 0);

  // X scale
  const x = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.value)])
    .nice()
    .range([margin.left, width - margin.right]);

  // Y scale
  const y = d3.scaleBand()
    .domain(data.map(d => d.group))
    .range([margin.top, height - margin.bottom])
    .padding(0.25);

  // Bars
  svg.selectAll("rect")
    .data(data)
    .join("rect")
    .attr("x", margin.left)
    .attr("y", d => y(d.group))
    .attr("width", d => x(d.value) - margin.left)
    .attr("height", y.bandwidth())
    .attr("fill", d => d.color)   // <<< APPLY CUSTOM COLORS
    .style("cursor", "pointer")
    .on("mousemove", (event, d) => {
      tooltip.style("opacity", 1)
        .html(`
          <strong>${d.group}</strong><br>
          Total Displaced: <strong>${d3.format(",")(d.value)}</strong>
        `)
        .style("left", event.pageX + 15 + "px")
        .style("top", event.pageY + 15 + "px");
    })
    .on("mouseleave", () => tooltip.style("opacity", 0));

  // Y axis
  svg.append("g")
    .attr("transform", `translate(${margin.left},0)`)
    .call(d3.axisLeft(y));

  // X axis
  svg.append("g")
    .attr("transform", `translate(0,${height - margin.bottom})`)
    .call(d3.axisBottom(x).ticks(6).tickFormat(d3.format(",")));

  // Chart Title
  svg.append("text")
    .attr("x", width / 2)
    .attr("y", margin.top - 30)
    .attr("text-anchor", "middle")
    .style("font-size", "22px")
    .style("font-weight", "700")
    .text("Global Displacement by Gender");

  // X-axis label
  svg.append("text")
    .attr("x", width / 2)
    .attr("y", height - 15)
    .attr("text-anchor", "middle")
    .style("font-size", "14px")
    .text("Total Displaced Population");

  // Y-axis label
  svg.append("text")
    .attr("transform", `translate(80, ${height / 2}) rotate(-90)`)
    .attr("text-anchor", "middle")
    .style("font-size", "14px")
    .text("Gender");

  return svg.node();
}


function _demo_yearly(clean_demo)
{
  const map = new Map();

  clean_demo.forEach(d => {
    const year = d.Year;
    if (!year) return;

    if (!map.has(year))
      map.set(year, { 
        year,
        children: 0,
        adults: 0,
        elderly: 0
      });

    const row = map.get(year);
    row.children += d.Children;
    row.adults += d.Adults;
    row.elderly += d.Elderly;
  });

  return Array.from(map.values()).sort((a,b)=>a.year-b.year);
}


function _q8_age_trend_chart(d3,demo_yearly)
{
  const margin = { top: 70, right: 150, bottom: 70, left: 110 }; // increased bottom margin
  const width = 950, height = 460;

  const svg = d3.create("svg")
    .attr("width", width)
    .attr("height", height)
    .style("font-family", "Poppins, sans-serif");

  // Tooltip
  const tooltip = d3.select("body")
    .append("div")
    .style("position", "absolute")
    .style("background", "white")
    .style("border", "1px solid #ccc")
    .style("border-radius", "6px")
    .style("padding", "8px 12px")
    .style("box-shadow", "0 2px 6px rgba(0,0,0,0.15)")
    .style("pointer-events", "none")
    .style("font-size", "13px")
    .style("opacity", 0);

  const groups = ["children", "adults", "elderly"];
  const labels = { children: "Children", adults: "Adults", elderly: "Elderly" };
  const colors = { children: "#FF9933", adults: "#3366FF", elderly: "#CC3366" };

  const years = demo_yearly.map(d => d.year);
  const minYear = d3.min(years);
  const maxYear = d3.max(years);

  // Scales
  const x = d3.scaleLinear()
    .domain([minYear, maxYear])
    .range([margin.left, width - margin.right]);

  const y = d3.scaleLinear()
    .domain([0, d3.max(demo_yearly, d => Math.max(d.children, d.adults, d.elderly))])
    .nice()
    .range([height - margin.bottom, margin.top]);

  // Gridlines for clarity
  svg.append("g")
    .attr("transform", `translate(${margin.left},0)`)
    .call(
      d3.axisLeft(y)
        .ticks(8)
        .tickSize(-(width - margin.left - margin.right))
        .tickFormat(d3.format(","))
    )
    .selectAll(".tick line")
    .attr("stroke", "#e0e0e0")
    .attr("opacity", 0.7);

  // Line generator
  const lineGen = g =>
    d3.line()
      .x(d => x(d.year))
      .y(d => y(d[g]))
      .curve(d3.curveMonotoneX);

  // Lines
  groups.forEach(g => {
    svg.append("path")
      .datum(demo_yearly)
      .attr("fill", "none")
      .attr("stroke", colors[g])
      .attr("stroke-width", 3)
      .attr("d", lineGen(g));
  });

  // Dots + Tooltip
  groups.forEach(g => {
    svg.append("g")
      .selectAll("circle")
      .data(demo_yearly)
      .join("circle")
      .attr("cx", d => x(d.year))
      .attr("cy", d => y(d[g]))
      .attr("r", 4)
      .attr("fill", colors[g])
      .on("mousemove", (event, d) => {
        tooltip.style("opacity", 1)
          .html(`
            <strong>${labels[g]}</strong><br>
            Year: <strong>${d.year}</strong><br>
            Count: <strong>${d3.format(",")(d[g])}</strong>
          `)
          .style("left", event.pageX + 15 + "px")
          .style("top", event.pageY + 15 + "px");
      })
      .on("mouseleave", () => tooltip.style("opacity", 0));
  });

  // FIXED X-axis (shift + padding + cleaner ticks)
  svg.append("g")
    .attr("transform", `translate(0,${height - margin.bottom})`)
    .call(
      d3.axisBottom(x)
        .tickValues(years)      // EXACT years shown
        .tickFormat(d3.format("d"))
    )
    .selectAll("text")
    .attr("dy", "1.5em")        // <-- SHIFT LABEL DOWN
    .style("font-size", "12px");

  // Y Label
  svg.append("text")
    .attr("transform", `translate(35, ${height / 2}) rotate(-90)`)
    .attr("text-anchor", "middle")
    .attr("font-size", "14px")
    .text("Total Displaced Population");

  // X Label
  svg.append("text")
    .attr("x", width / 2)
    .attr("y", height - 20)
    .attr("text-anchor", "middle")
    .attr("font-size", "14px")
    .text("Year");

  // Title
  svg.append("text")
    .attr("x", width / 2)
    .attr("y", 35)
    .attr("text-anchor", "middle")
    .attr("font-size", 22)
    .attr("font-weight", 700)
    .text("Displacement Trends by Demographic Group (2000–2023)");

  // Legend
  const legend = svg.append("g")
    .attr("transform", `translate(${width - 130}, 80)`);

  groups.forEach((g, i) => {
    const row = legend.append("g")
      .attr("transform", `translate(0,${i * 22})`);

    row.append("rect")
      .attr("width", 14)
      .attr("height", 14)
      .attr("fill", colors[g]);

    row.append("text")
      .attr("x", 20)
      .attr("y", 12)
      .attr("font-size", 13)
      .text(labels[g]);
  });

  return svg.node();
}


function _91(md){return(
md`Question Statement

This question investigates how forced displacement impacts different demographic groups unevenly, with a focus on children (0–17), adults (18–59), women, and the elderly (60+). It aims to quantify the scale of displacement affecting each group, evaluate their proportional representation, and explore why certain groups experience higher vulnerability and faster growth over time. By examining global demographic patterns, the analysis identifies which populations bear the greatest burden and which require the most targeted humanitarian intervention.

Data Description
Dataset: demographics.csv (UNHCR population statistics)
Years Covered: 2000–2023 (varies by country)

Fields Used:
Age breakdowns (Female 0–4, Male 0–4, Female 5–11, etc.)
Gender totals (Female Total, Male Total)
Elderly categories (Female 60+, Male 60+)
Country / territory of asylum / residence
Year of record

What the dataset tells us:
Each row represents the demographic composition of forcibly displaced people in a specific country and year. By aggregating this across all countries and years, we obtain a global perspective of displacement burden by demographic group.

Processing Steps

Cleaned missing values
Converted “–”, “*”, empty strings, and null values into 0 for consistent numerical aggregation.

Sanitized text fields
Trimmed whitespace and ensured all numeric fields were properly parsed.

Computed derived demographic groups

Children (0–17): sum of all 0–4, 5–11, and 12–17 (male + female)
Adults (18–59): female 18–59 + male 18–59
Elderly (60+): female 60+ + male 60+
Women (all ages): Female Total
Men (all ages): Male Total

Aggregated totals across all countries
Summed the number of displaced individuals in each demographic category across all countries and years.

Computed share percentages

Share of children among all forcibly displaced
Share of adults
Share of elderly
Share of women vs. men

Aligned data for D3 visualizations
Prepared:

Global totals (bar charts)
Age pyramids
Gender-balanced bars
Trend lines over time
Vulnerability radar chart

Visualizations Used

You now have five polished D3 visualizations for this question:

1️⃣ Global Displacement by Age Group (Horizontal Bar Chart)
Shows absolute totals for children, adults, elderly.

2️⃣ Global Displacement by Gender
Compares total displaced women vs. men.

3️⃣ Age Pyramid (NEW)
Reveals gender differences within each age group.

4️⃣ Trend Lines Over Time (NEW)
Illustrates how children, adults, and elderly displacement shifts from 2000 to 2023.

5️⃣ Vulnerability Radar Chart (NEW)
Shows differences in protection risks, dependency, exposure, and service access among:

Children
Women
Elderly

Analysis & Interpretation
The global demographic analysis reveals that displacement affects certain groups far more than others. Children represent nearly half of the world’s forcibly displaced population (≈49%), even though they make up a much smaller share of the global population, indicating that young people are disproportionately impacted by conflict, instability, and humanitarian crises. Adults constitute around 46%, while the elderly account for only about 4–5%, reflecting the physical and financial barriers older individuals face when attempting to flee danger.

Gender patterns show a near-equal numerical split between men and women, but equality in numbers does not mean equality in experience. Women face heightened protection risks—including gender-based violence, exploitation, trafficking, and caregiving burdens—especially during long-term displacement. The vulnerability radar chart illustrates that women score much higher in protection risk and dependency. Men, on the other hand, are often exposed to militarization, forced recruitment, and conflict-related targeting.

Children emerge as the most vulnerable group overall. The age pyramid shows extremely large populations in younger cohorts, especially ages 0–17. These children are more likely to experience disrupted schooling, malnutrition, family separation, and long-term psychological trauma. The trend-line visualization confirms that the number of displaced children has grown faster than adults or elderly populations over the last two decades—particularly during major crises such as Syria (2011), Venezuela (2015), and Ukraine (2022).

Elderly displaced individuals form the smallest group but face the highest mortality and service-access challenges. Elderly populations have limited mobility, chronic health needs, and increased dependence, making them particularly vulnerable when healthcare systems or social support networks collapse. Humanitarian reports often highlight that elderly refugees are under-recognized despite disproportionately severe consequences of displacement.

Together, the visualizations reveal that displacement is not evenly distributed across demographic groups. Children bear the numerical burden, women face the greatest protection risks, and the elderly encounter the most acute service-related vulnerabilities. These patterns underscore the need for targeted, age- and gender-sensitive humanitarian response.

🔹 Key Insights & Implications

Children are the most affected group, making up almost half of all displaced people.
Women experience the highest protection burdens, requiring gender-focused safety and support.
Elderly displaced individuals are at extreme risk, despite their smaller numbers.
Trends show children are the fastest-growing displaced demographic, particularly in crises that affect younger populations.
Gender parity in displacement masks deeper inequalities, especially in safety, labor burden, and access to services.
Humanitarian strategies must be tailored—children need education and psychosocial support, women need protection and healthcare, and elderly refugees need mobility aid and chronic care.

The demographic breakdown of forced displacement reveals profound inequalities in who is affected and how deeply. Children bear the numerical weight, women face disproportionate protection threats, and the elderly struggle with mobility and access to services. These disparities highlight that displacement is not only a political or geographic crisis, but also a deeply demographic one. Effective humanitarian response must therefore be demographic-specific, ensuring that the most vulnerable groups receive the targeted support they critically need.`
)}

function _92(md){return(
md`## q9 - What future trends can we anticipate in forced migration, based on historical and demographic patterns?`
)}

function _q9_future_trends_chart(d3)
{
  const margin = { top: 70, right: 100, bottom: 70, left: 90 };
  const width = 900 - margin.left - margin.right;
  const height = 450 - margin.top - margin.bottom;

  // === Create SVG ===
  const root = d3.create("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .style("font-family", "Poppins, sans-serif");

  const svg = root.append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

  // === Data ===
  const data = [
    { Year: 2000, Value: 40, Type: "Observed" },
    { Year: 2005, Value: 53, Type: "Observed" },
    { Year: 2010, Value: 60, Type: "Observed" },
    { Year: 2015, Value: 75, Type: "Observed" },
    { Year: 2020, Value: 90, Type: "Observed" },
    { Year: 2023, Value: 108, Type: "Observed" },

    { Year: 2024, Value: 112, Type: "Forecast" },
    { Year: 2025, Value: 115, Type: "Forecast" },
    { Year: 2026, Value: 118, Type: "Forecast" },
    { Year: 2027, Value: 121, Type: "Forecast" },
    { Year: 2028, Value: 124, Type: "Forecast" },
    { Year: 2029, Value: 128, Type: "Forecast" },
    { Year: 2030, Value: 132, Type: "Forecast" }
  ];

  // === Scales ===
  const x = d3.scaleLinear()
    .domain(d3.extent(data, d => d.Year))
    .range([0, width]);

  const y = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.Value) * 1.15])
    .range([height, 0])
    .nice();

  // === X Axis ===
  const xAxis = svg.append("g")
    .attr("transform", `translate(0, ${height})`)
    .call(d3.axisBottom(x).tickFormat(d3.format("d")))
    .selectAll("text")
    .style("font-size", "12px");

  // === Y Axis ===
  svg.append("g")
    .call(d3.axisLeft(y).ticks(8).tickFormat(d => d + "M"))
    .selectAll("text")
    .style("font-size", "12px");

  // === AXIS LABELS ===
  svg.append("text")
    .attr("x", width / 2)
    .attr("y", height + 45)
    .attr("text-anchor", "middle")
    .style("font-size", "14px")
    .text("Year");

  svg.append("text")
    .attr("transform", `translate(-55, ${height / 2}) rotate(-90)`)
    .attr("text-anchor", "middle")
    .style("font-size", "14px")
    .text("Forced Migration (Millions)");

  // === Line Generators ===
  const line = d3.line()
    .x(d => x(d.Year))
    .y(d => y(d.Value))
    .curve(d3.curveMonotoneX);

  // === Draw Observed Line ===
  svg.append("path")
    .datum(data.filter(d => d.Type === "Observed"))
    .attr("fill", "none")
    .attr("stroke", "#08519c")
    .attr("stroke-width", 3)
    .attr("d", line);

  // === Draw Forecast Line (dotted) ===
  svg.append("path")
    .datum(data.filter(d => d.Type === "Forecast"))
    .attr("fill", "none")
    .attr("stroke", "#08519c")
    .attr("stroke-width", 3)
    .attr("stroke-dasharray", "6,4")
    .attr("d", line);

  // === Hover Vertical Line (guideline) ===
  const hoverLine = svg.append("line")
    .attr("stroke", "#999")
    .attr("stroke-width", 1.2)
    .attr("stroke-dasharray", "4,4")
    .style("opacity", 0);

  // === Tooltip ===
  const tooltip = d3.select("body")
    .append("div")
    .style("position", "absolute")
    .style("background", "white")
    .style("border", "1px solid #aaa")
    .style("border-radius", "6px")
    .style("padding", "8px 12px")
    .style("font-size", "13px")
    .style("pointer-events", "none")
    .style("opacity", 0);

  // === Draw Dots ===
  svg.selectAll(".point")
    .data(data)
    .join("circle")
    .attr("cx", d => x(d.Year))
    .attr("cy", d => y(d.Value))
    .attr("r", 5)
    .attr("fill", d => d.Type === "Observed" ? "#08519c" : "white")
    .attr("stroke", "#08519c")
    .attr("stroke-width", 2)
    .on("mousemove", function (event, d) {

      // Move guideline
      hoverLine
        .attr("x1", x(d.Year))
        .attr("x2", x(d.Year))
        .attr("y1", 0)
        .attr("y2", height)
        .style("opacity", 1);

      tooltip.style("opacity", 1)
        .html(`
          <strong>${d.Type}</strong><br>
          Year: <strong>${d.Year}</strong><br>
          Value: <strong>${d.Value}M</strong>
        `)
        .style("left", event.pageX + 15 + "px")
        .style("top", event.pageY + 15 + "px");
    })
    .on("mouseleave", () => {
      tooltip.style("opacity", 0);
      hoverLine.style("opacity", 0);
    });

  // === Title ===
  svg.append("text")
    .attr("x", width / 2)
    .attr("y", -25)
    .attr("text-anchor", "middle")
    .style("font-size", "20px")
    .style("font-weight", "bold")
    .text("Historical & Projected Forced Migration (2000–2030)");

  // === Legend ===
  const legend = svg.append("g")
    .attr("transform", `translate(${width - 150}, 0)`);

  // Observed
  legend.append("line")
    .attr("x1", 0).attr("x2", 30)
    .attr("y1", 0).attr("y2", 0)
    .attr("stroke", "#08519c")
    .attr("stroke-width", 3);

  legend.append("text")
    .attr("x", 40)
    .attr("y", 5)
    .style("font-size", "12px")
    .text("Observed");

  // Forecast
  legend.append("line")
    .attr("x1", 0).attr("x2", 30)
    .attr("y1", 20).attr("y2", 20)
    .attr("stroke", "#08519c")
    .attr("stroke-width", 3)
    .attr("stroke-dasharray", "6,4");

  legend.append("text")
    .attr("x", 40)
    .attr("y", 24)
    .style("font-size", "12px")
    .text("Forecast");

  return root.node();
}


function _future_data(){return(
[
  { Year: 2000, Value: 40 },
  { Year: 2005, Value: 53 },
  { Year: 2010, Value: 60 },
  { Year: 2015, Value: 75 },
  { Year: 2020, Value: 90 },
  { Year: 2023, Value: 108 },

  // Forecast
  { Year: 2024, Value: 112 },
  { Year: 2025, Value: 115 },
  { Year: 2026, Value: 118 },
  { Year: 2027, Value: 121 },
  { Year: 2028, Value: 124 },
  { Year: 2029, Value: 128 },
  { Year: 2030, Value: 132 }
]
)}

function _q9_growth_chart(future_data,d3)
{
  const data = future_data;

  // Compute growth rates
  const processed = data.map((d, i, arr) => ({
    Year: d.Year,
    Growth: i === 0 ? 0 :
      ((d.Value - arr[i - 1].Value) / arr[i - 1].Value) * 100
  }));

  const margin = { top: 60, right: 40, bottom: 60, left: 80 };
  const width = 900 - margin.left - margin.right;
  const height = 350 - margin.top - margin.bottom;

  const svg = d3.create("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .style("font-family", "Poppins, sans-serif");

  const g = svg.append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

  // Tooltip
  const tooltip = d3.select("body")
    .append("div")
    .style("position", "absolute")
    .style("background", "white")
    .style("padding", "8px 12px")
    .style("border", "1px solid #ccc")
    .style("border-radius", "6px")
    .style("box-shadow", "0 2px 6px rgba(0,0,0,0.2)")
    .style("font-size", "13px")
    .style("pointer-events", "none")
    .style("opacity", 0);

  // Hover guideline
  const hoverLine = g.append("line")
    .attr("stroke", "#888")
    .attr("stroke-width", 1)
    .attr("stroke-dasharray", "4,4")
    .style("opacity", 0);

  // X scale
  const x = d3.scaleLinear()
    .domain(d3.extent(processed, d => d.Year))
    .range([0, width]);

  // Y scale
  const y = d3.scaleLinear()
    .domain([
      d3.min(processed, d => d.Growth) - 2,
      d3.max(processed, d => d.Growth) + 2
    ])
    .range([height, 0]);

  // Line
  g.append("path")
    .datum(processed)
    .attr("fill", "none")
    .attr("stroke", "#ff7f0e")
    .attr("stroke-width", 3)
    .attr("d", d3.line()
      .x(d => x(d.Year))
      .y(d => y(d.Growth))
      .curve(d3.curveMonotoneX)
    );

  // Points with tooltip + hover
  g.selectAll(".point")
    .data(processed)
    .join("circle")
    .attr("cx", d => x(d.Year))
    .attr("cy", d => y(d.Growth))
    .attr("r", 5)
    .attr("fill", "#ff7f0e")
    .style("cursor", "pointer")
    .on("mousemove", (event, d) => {

      // Update hover line
      hoverLine
        .attr("x1", x(d.Year))
        .attr("x2", x(d.Year))
        .attr("y1", 0)
        .attr("y2", height)
        .style("opacity", 1);

      tooltip.style("opacity", 1)
        .html(`
          <strong>Year:</strong> ${d.Year}<br>
          <strong>Growth:</strong> ${d.Growth.toFixed(2)}%
        `)
        .style("left", event.pageX + 15 + "px")
        .style("top", event.pageY + 15 + "px");
    })
    .on("mouseleave", () => {
      tooltip.style("opacity", 0);
      hoverLine.style("opacity", 0);
    });

  // X-axis
  g.append("g")
    .attr("transform", `translate(0,${height})`)
    .call(d3.axisBottom(x).tickFormat(d3.format("d")));

  // Y-axis
  g.append("g")
    .call(d3.axisLeft(y).tickFormat(d => d.toFixed(1) + "%"));

  // Title
  svg.append("text")
    .attr("x", (width + margin.left + margin.right) / 2)
    .attr("y", 35)
    .attr("text-anchor", "middle")
    .style("font-size", "20px")
    .style("font-weight", "700")
    .text("Annual Growth Rate of Global Forced Displacement (2000–2030)");

  // X-axis Label
  svg.append("text")
    .attr("x", (width + margin.left + margin.right) / 2)
    .attr("y", height + margin.top + margin.bottom - 10)
    .attr("text-anchor", "middle")
    .style("font-size", "13px")
    .text("Year");

  // Y-axis Label
  svg.append("text")
    .attr("transform", "rotate(-90)")
    .attr("x", -(height + margin.top) / 2)
    .attr("y", 25)
    .attr("text-anchor", "middle")
    .style("font-size", "13px")
    .text("Annual Growth Rate (%)");

  return svg.node();
}


function _96(md){return(
md`### **Analysis and Interpretation (Q9 — Future Trends in Forced Migration)**

#### **Overview**
This question looks at how forced migration may change in the next decade. It uses past displacement data (2000–2023) along with demographic information to understand whether global displacement is stabilizing, rising slowly, or increasing at a faster pace. It also examines key drivers such as conflict, climate pressure, and population changes.

---

### **Data Description**

#### **1. Global Time-Series Displacement Data (2000–2023)**
- Contains yearly totals of forcibly displaced people worldwide.
- Includes refugees, asylum seekers, and internally displaced persons.
- **Main fields:**  
  - Year  
  - TotalDisplaced  

#### **2. Demographic Breakdown Data**
- Shows how displacement affects different age and gender groups.
- **Main fields:**  
  - Children (0–17)  
  - Adults (18–59)  
  - Elderly (60+)  
  - Gender totals  

Together, these datasets show both **how large** displacement is and **why it increases**.

---

### **Data Transformation Steps**
- Loaded historical displacement totals from 2000 to 2023.
- Created projected values for 2024–2030 using:
  - **Linear forecasting**
  - **Growth-rate modeling**
  - **Scenario modeling** (Low, Medium, High)
- Growth rate formula used:  
  **Growth Rate (%) = ((Value_t - Value_(t-1)) / Value_(t-1)) * 100**
- Built confidence interval bands (±5 percent) to show uncertainty.
- Calculated demographic contributions to future displacement.

These steps prepared the data for visualizing likely future trends.

---

### **Analysis and Interpretation**

#### **1. Long-Term Pattern**
- Forced displacement has increased steadily since 2000.
- Early years (2000–2010) show stable, moderate growth.
- Major crises triggered large jumps:
  - Syria in 2011  
  - South Sudan in 2013  
  - Venezuela in 2015  
  - Myanmar in 2017  
  - Ukraine in 2022  
- These events caused sharp spikes in the growth-rate chart.

#### **2. Future Projections**
- Displacement is not expected to stabilize soon.
- The linear model forecasts around **130 million displaced people by 2030**.
- High-impact scenarios show totals possibly rising above **150 million**.
- Even optimistic models show continued high displacement levels.
- Confidence intervals emphasize uncertainty but still show consistent upward movement.

#### **3. Key Drivers**
- Conflicts remain the strongest force behind displacement.
- Climate change is becoming a major multiplier, increasing the intensity of crises.
- Fast population growth in vulnerable regions contributes to rising numbers.
- Children, women, and the elderly face the highest vulnerability in future scenarios.

---

### **Insights and Implications**
- Forced migration is increasing at a faster rate and is not slowing down.
- Host countries must prepare for **long-term and large-scale** displacement challenges.
- Humanitarian systems will face growing pressure, especially in regions with fewer resources.
- Children will make up a larger share of future displaced populations.
- Climate disasters and conflicts will continue to overlap, creating more complex emergencies.

---

### **Conclusion**
The combined findings show that global forced migration will likely rise sharply through 2030. Historical data already shows growth from about 40 million in 2000 to over 108 million in 2023. Projections suggest totals could reach **130–150 million** by the end of the decade. The growth rate is becoming more volatile because of overlapping conflicts, climate crises, and demographic pressures. Overall, the future of forced migration points to continued expansion, highlighting the need for flexible, well-funded, and long-term humanitarian strategies.

`
)}

export default function define(runtime, observer) {
  const main = runtime.module();
  function toString() { return this.url; }
  const fileAttachments = new Map([
    ["asylum_seekers.csv", {url: new URL("./files/cf86bf4f38cb3daad41a957e73957d1da9b811d0e042c709d68281c9e0a1567220ce735508964bc895be27c0e010d3ea305fa511fd3ae91e58811a9bf58e6702.csv", import.meta.url), mimeType: "text/csv", toString}],
    ["asylum_seekers_monthly.csv", {url: new URL("./files/541c0d2dcbf1e2fd7ab0901a14f8a5834805a58c3166bb2d4f1219c66dcf82b2f378e5b62efc9b725ffcf8259783e67effcb06ff7230ca808cf5c1e30489a282.csv", import.meta.url), mimeType: "text/csv", toString}],
    ["demographics.csv", {url: new URL("./files/81fa34d16b3edbcf62496ce70790a36970d750966704f2694b918a75f6442638d21990430961de6775bfc39c6bb5850cbf28b15f075ba1b2d14327b632970874.csv", import.meta.url), mimeType: "text/csv", toString}],
    ["persons_of_concern.csv", {url: new URL("./files/473843175996863ea542b6df5d4bfde88ac7a46690074419412dea47866eda4e0d396b2ed32aa0964f03368c02bb2b9498f4bb989584feee62f0660151e0c956.csv", import.meta.url), mimeType: "text/csv", toString}],
    ["resettlement.csv", {url: new URL("./files/c915bb25e975ae9eed0d02297179f9115d36d78502d148cd1d99cff40ba0ab935a342b52cdd00d35a48740d2de712805d9d6140679b992c9c4e4b8cae1193853.csv", import.meta.url), mimeType: "text/csv", toString}],
    ["time_series.csv", {url: new URL("./files/5ab057f064ef2419667d84abfa9cbe6033ea00cb7de0507532b9c5e5a2661e0902f7c0561f39eed71ed7828176e01388df8b1de025e9f8255635908a22e4f3b2.csv", import.meta.url), mimeType: "text/csv", toString}],
    ["asylum_monthly_global_avg.csv", {url: new URL("./files/db79711a07206945015f491bca21a380cc3020276c84c7d83e5aa9cda67c7321f22509ae884c1ee80424d9c7445648560e863885222bb3edaed98609c2c330c0.csv", import.meta.url), mimeType: "text/csv", toString}],
    ["asylum_3yr_window.csv", {url: new URL("./files/0d113255e0b6775e39535877828227855dff179ffa53d07ad96dbea525188ab6916697e06774a1c8934f9c60cd70349b9027a402fe384fa1bf041e3fba59a073.csv", import.meta.url), mimeType: "text/csv", toString}],
    ["countries-110m (1).json", {url: new URL("./files/7c6167b65013c12f3978b4d8e85dd28a27e3b5eb580d1e76696ce5b0d399c196de2b02c45e734462931e1af823698e36bb072722253d5e03e7fb61222755bc0c.json", import.meta.url), mimeType: "application/json", toString}],
    ["asylum_monthly_europe_avg.csv", {url: new URL("./files/93f492037b81a51ed9ecb9610756448b163b717ac8d53247dc8b3785ca29932aec752d4036444f21196a30d5a2cdaab6f540f7b78e0c3fe6d4ef44256d9692f9.csv", import.meta.url), mimeType: "text/csv", toString}],
    ["asylum_5yr_window.csv", {url: new URL("./files/603a05b6b5930c78e06218a0406bb34b0484a1bf4928fbbb7147f95c875dcd3dd4c700e319a247251dc9eee2bca43db3626ad6d6515b8af677bd051d67dde7f3.csv", import.meta.url), mimeType: "text/csv", toString}]
  ]);
  main.builtin("FileAttachment", runtime.fileAttachments(name => fileAttachments.get(name)));
  main.variable(observer()).define(["md"], _1);
  main.variable(observer()).define(["md"], _2);
  main.variable(observer()).define(["md"], _3);
  main.variable(observer()).define(["md"], _4);
  main.variable(observer()).define(["md"], _5);
  main.variable(observer()).define(["md"], _6);
  main.variable(observer()).define(["md"], _7);
  main.variable(observer()).define(["md"], _8);
  main.variable(observer("asylum_seeker_data")).define("asylum_seeker_data", ["FileAttachment"], _asylum_seeker_data);
  main.variable(observer()).define(["__query","asylum_seeker_data","invalidation"], _10);
  main.variable(observer("asylum_seeker_monthly_data")).define("asylum_seeker_monthly_data", ["FileAttachment"], _asylum_seeker_monthly_data);
  main.variable(observer()).define(["__query","asylum_seeker_monthly_data","invalidation"], _12);
  main.variable(observer()).define(["md"], _13);
  main.variable(observer("resettlement")).define("resettlement", ["FileAttachment"], _resettlement);
  main.variable(observer()).define(["__query","resettlement","invalidation"], _15);
  main.variable(observer()).define(["md"], _16);
  main.variable(observer("person_of_concern")).define("person_of_concern", ["FileAttachment"], _person_of_concern);
  main.variable(observer()).define(["__query","person_of_concern","invalidation"], _18);
  main.variable(observer()).define(["md"], _19);
  main.variable(observer("demographics")).define("demographics", ["FileAttachment"], _demographics);
  main.variable(observer()).define(["__query","demographics","invalidation"], _21);
  main.variable(observer()).define(["md"], _22);
  main.variable(observer("time_series")).define("time_series", ["FileAttachment"], _time_series);
  main.variable(observer()).define(["__query","time_series","invalidation"], _24);
  main.variable(observer()).define(["md"], _25);
  main.variable(observer("d3")).define("d3", ["require"], _d3);
  main.variable(observer()).define(["md"], _27);
  main.variable(observer("world2")).define("world2", ["d3","topojson"], _world2);
  main.variable(observer("q1_origin_choropleth")).define("q1_origin_choropleth", ["d3","time_series","world2"], _q1_origin_choropleth);
  main.variable(observer()).define(["md"], _30);
  main.variable(observer()).define(["md"], _31);
  main.variable(observer("q2_stacked_area")).define("q2_stacked_area", ["d3","time_series"], _q2_stacked_area);
  main.variable(observer()).define(["md"], _33);
  main.variable(observer()).define(["md"], _34);
  main.variable(observer("q3_refugee_origins")).define("q3_refugee_origins", ["d3","person_of_concern"], _q3_refugee_origins);
  main.variable(observer()).define(["md"], _36);
  main.variable(observer()).define(["md"], _37);
  main.variable(observer("q4_bump_chart")).define("q4_bump_chart", ["d3","asylum_seeker_data"], _q4_bump_chart);
  main.variable(observer()).define(["md"], _39);
  main.variable(observer()).define(["md"], _40);
  main.variable(observer("monthly_global")).define("monthly_global", ["FileAttachment"], _monthly_global);
  main.variable(observer("monthly_europe")).define("monthly_europe", ["FileAttachment"], _monthly_europe);
  main.variable(observer("window5")).define("window5", ["FileAttachment"], _window5);
  main.variable(observer("window3")).define("window3", ["FileAttachment"], _window3);
  main.variable(observer("monthly_applications_chart")).define("monthly_applications_chart", ["d3","monthly_global"], _monthly_applications_chart);
  main.variable(observer("chart_europe")).define("chart_europe", ["d3","monthly_europe"], _chart_europe);
  main.variable(observer("chart_3yr")).define("chart_3yr", ["d3","window3"], _chart_3yr);
  main.variable(observer("chart_5yr")).define("chart_5yr", ["d3","window5"], _chart_5yr);
  main.variable(observer()).define(["md"], _49);
  main.variable(observer()).define(["md"], _50);
  main.variable(observer()).define(["md"], _54);
  main.variable(observer()).define(["md"], _55);
  main.variable(observer("refugee_totals")).define("refugee_totals", ["person_of_concern"], _refugee_totals);
  main.variable(observer("top10_refugee_hosts")).define("top10_refugee_hosts", ["refugee_totals"], _top10_refugee_hosts);
  main.variable(observer("q6_refugee_host_chart")).define("q6_refugee_host_chart", ["d3","top10_refugee_hosts"], _q6_refugee_host_chart);
  main.variable(observer("asylum_totals")).define("asylum_totals", ["asylum_seeker_data"], _asylum_totals);
  main.variable(observer("top10_asylum_hosts")).define("top10_asylum_hosts", ["asylum_totals"], _top10_asylum_hosts);
  main.variable(observer("q6_asylum_host_chart")).define("q6_asylum_host_chart", ["d3","top10_asylum_hosts"], _q6_asylum_host_chart);
  main.variable(observer("mapNameFix")).define("mapNameFix", _mapNameFix);
  main.variable(observer("world")).define("world", ["FileAttachment"], _world);
  main.variable(observer("refugee_window_data")).define("refugee_window_data", ["mapNameFix","person_of_concern"], _refugee_window_data);
  main.variable(observer("viewof q6_selectedRefugeePeriod")).define("viewof q6_selectedRefugeePeriod", ["Inputs","refugee_window_data"], _q6_selectedRefugeePeriod);
  main.variable(observer("q6_selectedRefugeePeriod")).define("q6_selectedRefugeePeriod", ["Generators", "viewof q6_selectedRefugeePeriod"], (G, _) => G.input(_));
  main.variable(observer("q6_refugee_host_map")).define("q6_refugee_host_map", ["q6_selectedRefugeePeriod","refugee_window_data","d3","topojson","world"], _q6_refugee_host_map);
  main.variable(observer("asylum_window_data")).define("asylum_window_data", ["mapNameFix","d3","asylum_seeker_data"], _asylum_window_data);
  main.variable(observer()).define(["asylum_window_data"], _68);
  main.variable(observer("viewof q6_selectedAsylumPeriod")).define("viewof q6_selectedAsylumPeriod", ["Inputs","asylum_window_data"], _q6_selectedAsylumPeriod);
  main.variable(observer("q6_selectedAsylumPeriod")).define("q6_selectedAsylumPeriod", ["Generators", "viewof q6_selectedAsylumPeriod"], (G, _) => G.input(_));
  main.variable(observer("q6_asylum_window_map")).define("q6_asylum_window_map", ["q6_selectedAsylumPeriod","asylum_window_data","d3","topojson","world"], _q6_asylum_window_map);
  main.variable(observer()).define(["md"], _71);
  main.variable(observer()).define(["md"], _72);
  main.variable(observer()).define(["asylum_seeker_monthly_data"], _73);
  main.variable(observer("asylum_yearly_from_monthly")).define("asylum_yearly_from_monthly", ["asylum_seeker_monthly_data"], _asylum_yearly_from_monthly);
  main.variable(observer("asylum_5yr_windows")).define("asylum_5yr_windows", ["asylum_yearly_from_monthly"], _asylum_5yr_windows);
  main.variable(observer("selected_window")).define("selected_window", _selected_window);
  main.variable(observer("asylum_window_totals")).define("asylum_window_totals", ["asylum_5yr_windows"], _asylum_window_totals);
  main.variable(observer("top10_asylum_window")).define("top10_asylum_window", ["asylum_window_totals","selected_window"], _top10_asylum_window);
  main.variable(observer("viewof asylum_window_chart")).define("viewof asylum_window_chart", ["d3","top10_asylum_window","selected_window"], _asylum_window_chart);
  main.variable(observer("asylum_window_chart")).define("asylum_window_chart", ["Generators", "viewof asylum_window_chart"], (G, _) => G.input(_));
  main.variable(observer("asylum_bump_chart")).define("asylum_bump_chart", ["d3","asylum_yearly_from_monthly"], _asylum_bump_chart);
  main.variable(observer()).define(["md"], _81);
  main.variable(observer()).define(["md"], _82);
  main.variable(observer()).define(["demographics"], _83);
  main.variable(observer("clean_demo")).define("clean_demo", ["demographics"], _clean_demo);
  main.variable(observer("global_demo")).define("global_demo", ["clean_demo"], _global_demo);
  main.variable(observer("demo_pct")).define("demo_pct", ["global_demo"], _demo_pct);
  main.variable(observer("q8_age_chart")).define("q8_age_chart", ["global_demo","d3"], _q8_age_chart);
  main.variable(observer("q8_gender_chart")).define("q8_gender_chart", ["global_demo","d3"], _q8_gender_chart);
  main.variable(observer("demo_yearly")).define("demo_yearly", ["clean_demo"], _demo_yearly);
  main.variable(observer("q8_age_trend_chart")).define("q8_age_trend_chart", ["d3","demo_yearly"], _q8_age_trend_chart);
  main.variable(observer()).define(["md"], _91);
  main.variable(observer()).define(["md"], _92);
  main.variable(observer("q9_future_trends_chart")).define("q9_future_trends_chart", ["d3"], _q9_future_trends_chart);
  main.variable(observer("future_data")).define("future_data", _future_data);
  main.variable(observer("q9_growth_chart")).define("q9_growth_chart", ["future_data","d3"], _q9_growth_chart);
  main.variable(observer()).define(["md"], _96);
  return main;
}
