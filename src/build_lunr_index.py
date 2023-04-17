import os 
import sys
import frontmatter
import json
import string

with open("./lunr_index.json", "w") as list_file:
	with open("./lunr_tag_index.json", "w") as lf2:
		index = []
		index2 = []

		for root, subdirs, files in os.walk("./problems"):

			for problem in files:
				if "sol" not in problem:
					er = root.split("\\")
					# print(er)
					post = frontmatter.load(os.path.join(root, problem))

					tmp = {"name": er[1].upper() + " " + er[2].upper() + " " + problem.split(".")[0].upper() + ": " + post["title"], "text": post["title"]}


					if "tags" in post.keys():
						tmp["text"] += " " + " ".join(post["tags"]) 

					index2.append(tmp.copy())

					tmp["text"] += post.content.translate({ord(c): " " for c in '#|[]—\n*,()'})

					# print(tmp)

					index.append(tmp)

					# print(post)

					# print(root + "/" + problem)
					# print(tmp)

		list_file.write(json.dumps(index))
		lf2.write(json.dumps(index2))