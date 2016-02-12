import csv
import json
#import pprint

rawfile = "com_intern_jobs_2016.txt"
codefile = 'state_codes_map.csv'
outputfile = 'intern_postings.json'

state_codes = []

jobsData = []

state_code_map = {}

#Map COM's state abbreviations to two letter state codes
with open(codefile, 'rb') as csvin:
	reader = csv.reader(csvin)
	for row in reader:
		twoLetter = row[0]
		AP = row[1]
		state_code_map[AP] = twoLetter

#print state_code_map
#Parse COM data
with open(rawfile, 'rb') as tsvin:
	readerIn = csv.reader(tsvin, dialect=csv.excel_tab)
	for row in readerIn:
		city = row[0]
		state = row[1].upper()
		job = row[2]

		#Clean up weird stuff (luckily there are few edge cases)
		if not state:
			if city[0] == 'W':
				state = 'D.C.'
			elif city[0] == 'N':
				state = 'N.Y.'
		if state[0] == ' ':
			state = state[1:]

		#Rename state to 2-letter code from map
		state = state_code_map[state]

		#Create relation for each row
		relation = [state, job]

		#List of lists for output
		jobsData.append(relation)

	#print jobsData

jobsTree = {}

for posting in jobsData:
		state = posting[0]
		position = posting[1]

		if state not in jobsTree:
			jobsTree[state] = {'names' : [position]}
		else:
			stateLevel = jobsTree[state]
			stateLevel['names'].append(position)

# pp = pprint.PrettyPrinter()

# pp.pprint(jobsTree)

with open(outputfile, 'w+') as output:
	json.dump(jobsTree, output)
