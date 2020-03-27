import json # so we can turn our list into a json string

word_list = []

# open the file
with open('text/1000words.txt') as f:
    # read each line
    for word in f:
        # get rid of newline char and add to list
        word_list.append(word.strip('\n'))

#print(word_list)
out_file = open("text/english_words.json", "x")
json.dump(word_list, out_file)
out_file.close()