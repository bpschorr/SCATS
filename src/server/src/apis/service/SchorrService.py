path.append(getcwd() + "/dao")
import SchorrDAO
import json

class SchorrService:
	def __init__():

	def query_database(self, dictionary):
		response = []
		try:
			result = SchorrDAO().query(dictionary['filters'])
			head_list = SchorrDAO().get_headers()
			res_list = []
			page_size = int(dictionary['pageSize'])
			if len(result) <= page_size:
				for tuples in result:
					dictionary = {}
					dictionary[head_list[1]] = tuples[1]
					dictionary[head_list[2]] = tuples[2]
					dictionary[head_list[3]] = tuples[3]
					dictionary[head_list[4]] = tuples[4]
					res_list.append(dictionary)
			else:
				for i in range(0, page_size):
					tuples = result[i]
					dictionary = {}
					dictionary[head_list[1]] = tuples[1]
					dictionary[head_list[2]] = tuples[2]
					dictionary[head_list[3]] = tuples[3]
					dictionary[head_list[4]] = tuples[4]
					res_list.append(dictionary)

			response = json.dumps(res_list)


		except:
			response



	def get_headers(self):
		response = []
		try:
			result = SchorrDAO().get_headers()
			res_list = []
			for tuples in results:
				res_list.append(tuples[0])
			
			res_list.pop(0)
			response = json.dumps(res_list)

		except:
			response = json.dumps([])

		return response