import csv
import json

rawfile = "output_jobs.txt"
outputfile = "intern_postings.json"

jobsTree = {}

with open(rawfile, 'rb') as tsvfile:
	reader = csv.reader(tsvfile, delimiter='\t')
	for row in reader:
		state = row[0]
		position = row[1]

		if state not in jobsTree:
			jobsTree[state] = {'names' : [position]}
		else:
			stateLevel = jobsTree[state]
			stateLevel['names'].append(position)


with open(outputfile, 'wb') as output:
	json.dump(jobsTree, output)