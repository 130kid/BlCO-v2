import requests, time, threading, json

Discord_API = "https://discord.com/api/v9"

def dm_advertiser():
    data = {
        'recipients': [user]
    }
    payload = {
        "content": "@everyone 무릎을 꿇어라"
    }
    headers = {
        "authorization": f"{token}",
        "Content-Type": "application/json",
    }
    r = requests.post(f"{Discord_API}/users/@me/channels",json=data, headers=headers)
    channels_id = r.json()['id']
    requests.post(f"{Discord_API}/channels/{channels_id}/messages", data=json.dumps(payload), headers=headers)



token = open("token.txt", "r").readline().strip('\n')
for i in range(1):
    with open("members.txt", "r")as f:
        for user in f.readlines():
            user = user.strip('\n')
            threading.Thread(target=dm_advertiser).start()
            print(f"Sent a Message to {user}!!")
            time.sleep(0.1)
        f.close()