from flask import Flask, render_template
import requests

steamKey = ""
steamID = ""
api = f'http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key={steamKey}&steamids={steamID}'

app = Flask(__name__)

@app.route('/')
def hello():
    steamProfile = requests.get(api).json()
    steamNickname = steamProfile['response']['players'][0]['personaname']
    if app.debug:
        return render_template('fofu.html', debug=True, steamName=steamNickname)
    else:
        return render_template('fofu.html', debug=False, steamName=steamNickname)

@app.route('/AR')
def arroute():
    return render_template('AR.html')

if __name__ == '__main__':
    app.run(debug=True)
