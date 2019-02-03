#!/bin/bash

export IMAGE_NAME=stellar/laboratory

docker build . --no-cache -t $IMAGE_NAME
docker tag $IMAGE_NAME repository.kuknos.org:3051/$IMAGE_NAME
docker push repository.kuknos.org:3051/$IMAGE_NAME
