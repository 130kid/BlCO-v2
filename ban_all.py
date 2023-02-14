import requests, threading, time

Discord_API = "https://discord.com/api/v9"

def ban_all():
    headers = {
        "authorization": f"{token}",
        "Content-Type": "application/json",
    }
    requests.put(f"{Discord_API}/v9/guilds/{guild}/bans/{user}", headers=headers)




guild = open("guild.txt","r").readline().strip('\n')
token = open("token.txt", "r").readline().strip('\n')
with open("members.txt","r") as f:
    for user in f.readlines():
        user = user.strip('\n')
        threading.Thread(target=ban_all).start()
        time.sleep(0.08)
    f.close()