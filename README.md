Project Running Instructions
How to Start the App from Scratch
1.	Clone the repository:
2.	git clone https://github.com/hashim-i222478/Project-SCD.git
3.	Navigate to backend
4.	npm install
5.	npm start
6.	Navigate to Frontend
7.	npm install
8.	npm run dev

How to Deploy Locally Using Minikube
1.	Start Minikube:
2.	minikube start
3.	Create the namespace:
4.	kubectl create namespace scd
5.	Apply the manifests:
6.	kubectl apply -f frontend-deployment.yaml
7.	kubectl apply -f backend-deployment.yaml
8.	kubectl apply -f frontend-service.yaml
9.	kubectl apply -f backend-service.yaml

How to View the Running Application
1.	Access the frontend service:
2.	minikube service frontend-service -n scd
3.	Open the provided URL (e.g., http://<minikube-ip>:30007) in a browser.
