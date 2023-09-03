# from flask import Flask, render_template, request
# import pickle
# import numpy as np

# app = Flask(__name__)

# def prediction(lst):
#     filename = 'model/severityPredictor.pickle'
#     with open(filename, 'rb') as file:
#         model = pickle.load(file)
#     pred_value = model.predict([lst])
#     return pred_value

# @app.route('/', methods=['POST', 'GET'])
# def index():
#     pred = '0'
#     if request.method == 'POST':
#         disease = request.form['disease']
#         nitrogen = request.form['nitrogen']
#         phosphorus = request.form['phosphorus']
#         potassium = request.form['potassium']
#         temperature = request.form['temperature']
#         humidity = request.form['humidity']
#         ph = request.form['ph']

#         feature_list = []
#         feature_list.append(float(nitrogen))
#         feature_list.append(float(phosphorus))
#         feature_list.append(float(potassium))
#         feature_list.append(float(temperature))
#         feature_list.append(float(humidity))
#         feature_list.append(float(ph))

#         disease_list = ['anthracnose', 'bacterialWilt', 'cankerDisease', 'cercosporaLeafBlight', 'dieback', 'leafSpot', 'nematodeInfestations', 'nutrientDeficiency', 'powderyMildew', 'rootRot', 'rustDisease', 'salinityStress', 'waterlogging']

#         for item in disease_list:
#             if item == disease:
#                 feature_list.append(1)
#             else:
#                 feature_list.append(0)

#         pred = prediction(feature_list)
#         print(pred)
#         pred = np.round(pred[0])

#     return render_template('index.html', pred=pred)

# # @app.route('/predict', methods=['POST', 'GET'])
# # def predict():
# #     if request.method == 'POST':
# #         disease = request.form['disease']
# #         nitrogen = request.form['nitrogen']
# #         phosphorus = request.form['phosphorus']
# #         potassium = request.form['potassium']
# #         temperature = request.form['temperature']
# #         humidity = request.form['humidity']
# #         ph = request.form['ph']

# #         feature_list = []
# #         feature_list.append(float(nitrogen))
# #         feature_list.append(float(phosphorus))
# #         feature_list.append(float(potassium))
# #         feature_list.append(float(temperature))
# #         feature_list.append(float(humidity))
# #         feature_list.append(float(ph))

# #         disease_list = ['anthracnose', 'bacterialWilt', 'cankerDisease', 'cercosporaLeafBlight', 'dieback', 'leafSpot', 'nematodeInfestations', 'nutrientDeficiency', 'powderyMildew', 'rootRot', 'rustDisease', 'salinityStress', 'waterlogging']

# #         for item in disease_list:
# #             if item == disease:
# #                 feature_list.append(1)
# #             else:
# #                 feature_list.append(0)

# #         pred = prediction(feature_list)
# #         pred = np.round(pred[0])

# #     return jsonify({'pred': str(pred)})

# if __name__ == '__main__':
#     app.run(debug=True)
