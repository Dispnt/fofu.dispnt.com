# -*- coding: utf8 -*-
import json
import requests

steamKey = "2BC45C48A6E5BC5C9D043C701E191EC3"
steamID = "76561198129708269"
api = f'http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key={steamKey}&steamids={steamID}'


def gen_data():
    try:
        steamProfile = requests.get(api).json()
        steamNickname = steamProfile['response']['players'][0]['personaname']
        steam = [steamNickname, "https://steamcommunity.com/id/dispnt", "#171A21"]
    except:
        steam = ["ff", "https://steamcommunity.com/id/dispnt", "#171A21"]
    greeting = ["Hola, this is fofu.", "", "#ffffff"]
    qq = ["570431231", "https://qm.qq.com/cgi-bin/qm/qr?k=hUWxfPBcb9m0Odid24TrVRfi96ULio4M", "#12b7f5"]
    arcamera = ["Fursona in AR", "https://fofu.dispnt.com/AR", "#3f729b"]
    twitter = ["@dispnt", "https://twitter.com/dispnt", "#1DA1F2"]
    character = ["Character Sheet", "https://fofu.dispnt.com/CS", "#f7a082"]

    result = {"greeting":greeting,"qq":qq,"arcamera":arcamera,"twitter":twitter,"character":character,"steam":steam}
    return json.dumps(result)

def main_handler(event, context):
    data = gen_data()
    return {
        "isBase64Encoded": False,
        "statusCode": 200,
        "headers": {'Content-Type': 'application/json'},
        "body": json.dumps(data)
    }

print(gen_data())