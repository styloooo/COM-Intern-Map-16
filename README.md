# College of Media Employment Map 2016
Map of College of Media internships/jobs

The map itself is straightforward — the difficulty is in cleaning/preprocessing the data points. To properly plot on the data map, state names need to be in the traditional 2-letter format (IL, WA, AK...).

I've created a key/map (state_codes_map.csv) for the limited data I was given, but the mapping will need to be modified to match the data set you are working with. Similarly, states must be named uniformly, so that requires a bit of beforehand cleaning. Maybe Google Refine is your best friend here. Or, better yet, have the data gathered in a way cohesive to this. Ideally state names shouldn't be free entry to prevent variation. For crowd sourced data, a web form with a dropdown list would work. 

Once you have the data prepared, export as a TSV and change the rawfile var in map_data_preprocess.py to that TSV's name. Run the Python script and you have your data map JSON. Link externally or copypasta into intern_postings var in job_map.js. Enjoy. 

Dependencies: <a href="http://d3js.org">D3.js</a>, <a href="https://github.com/mbostock/topojson">Topojson</a>, <a href="https://datamaps.github.io/">Datamaps</a>
