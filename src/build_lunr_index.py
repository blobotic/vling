import os 
import sys
import frontmatter
import json
import string
import re

with open("./lunr_index.json", "w") as list_file:
	with open("./lunr_tag_index.json", "w") as lf2:
		index = []
		index2 = []

		for root, subdirs, files in os.walk("./problems"):

			if len(files) == 0:
				continue

			def my_key(word):
				print(word)
				return [alphabet.index(c) for c in word]				

			alphabet = ".1234567890abcdefghijklmnopqrstuvwxyz-/\\"
			# alphabet = "zyxwvutsrqpomnlkjihgfedcba"
			# print(sorted(files, key=my_key))

			for problem in sorted(files, key=lambda word: [alphabet.index(c) for c in word]):
				# print(root[root.find("/"),root.find("\\")])
				if "sol" not in problem:
					er = root.split("\\")
					# print(er)
					post = frontmatter.load(os.path.join(root, problem))
					# print(post)

					problem2 = problem.split("-")

					name = er[1].upper() + " " + er[2].upper() + " " + problem2[0].split(".")[0].upper()
					 # + ": " + post["title"]

					tmp = {}
					rlyTmp = next((item for item in index if name in item["name"]), None)

					# print(rlyTmp)

					if rlyTmp:
						tmp = rlyTmp 
						index[:] = [d for d in index if d.get("name") != name]
					else:
						tmp = {"name": name + ": " + post["title"], "text": post["title"]}

						if "tags" in post.keys():
							tmp["text"] += " " + " ".join(post["tags"]) 

						index2.append(tmp.copy())


					tmp["text"] += " " + post.content.translate({ord(c): " " for c in '#|[]—\n*,()'})

					# add contest, year, problem to search
					tmp["text"] += " " + er[1] + " " + er[2] + " " + problem2[0] + " "

					# print(tmp)

					index.append(tmp)

					# print(post)

					# print(root + "/" + problem)
					# print(tmp)

		list_file.write(json.dumps(index))
		lf2.write(json.dumps(index2))