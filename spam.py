import requests, time, threading, random, json

char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz012346789"
Discord_API = "https://discord.com/api/v9"

message = "@everyone 무릎을 꿇어라"

def spammer():
    payload = {'content': f"{message} | {''.join(random.choice(char)for i in range(3))}"}
    headers = {
    "authorization": f"{token}",
    "Content-Type": "application/json",
    }
    requests.post(f'{Discord_API}/channels/{channel}/messages', data=json.dumps(payload), headers=headers)

guild = open("guild.txt","r").readline().strip('\n')
token = open("token.txt", "r").readline().strip('\n')
for _ in range(50):
    with open("channels.txt","r") as f:
        for channel in f.readlines():
            channel = channel.strip('\n')
            threading.Thread(target=spammer).start()
            time.sleep(0.01)
        f.close()