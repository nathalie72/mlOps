﻿# crédits https://github.com/umamadhaveedara/my-spotify-clone
# p/ installer flask
`conda install flask`
# pour lancer le site
`flask run`

# pour lancer le site avec docker

```bash
docker-compose build
docker-compose up -d
```

# Lancer minikube cluster
```bash
minkube start
minikube status
kubectl get nodes
```

# Créer image docker dans minikube environment
```bash
alias k='kubectl'
export do="--dry-run=client -o yaml"

eval $(minikube docker-env)
docker images
cd ~/projects/flask-project
docker build -t flask-web-app:latest .
docker images
```

# Préparer les fichiers de configuration Kubernetes :
## Configuration du déploiement :
```bash
mkdir kubernetes
k create deployment flask-web-app --image=flask-web-app:latest --port=5000 $do > kubernetes/deployment.yml
````
*)  Modifier la politique de récupération d'image dans la configuration du déploiement en Never, pour que Minikube tire l'image Docker du registre local :
https://stackoverflow.com/questions/42564058/how-can-i-use-local-docker-images-with-minikube
```yaml
    spec:
      containers:
      - image: flask-web-app:latest
        name: flask-web-app
        imagePullPolicy: Never
```
```bash
k apply -f kubernetes/deployment.yml
k get deployments
k get pods
````
## Configuration du service :
```bash
k expose deployment flask-web-app --type=NodePort --port=5000 --target-port=5000 --name=flask-web-app-service $do > kubernetes/service.yml

k apply -f kubernetes/service.yml
k get svc
minikube ip
curl http://192.168.49.2:<node_port>
````
