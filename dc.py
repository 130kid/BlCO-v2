import requests, time, threading, json

Discord_API = 'https://discord.com/api/v9'


def delete_all_channels():
    headers = {
        "authorization": f"{token}",
        "Content-Type": "application/json",
    }
    requests.delete(f"{Discord_API}/channels/{channel}", headers=headers)

guild = open("guild.txt","r").readline().strip('\n')
token = open("token.txt", "r").readline().strip('\n')
with open("channels.txt","r") as f:
    for channel in f.readlines():
        channel = channel.strip('\n')
        threading.Thread(target=delete_all_channels).start()
        time.sleep(0.08)
    f.close()