#!/bin/bash

if [ -z "$1" ]
  then
    echo "No argument supplied, please pass 1 or 2 or ... for image tag"
    exit
fi

export IMAGE_NAME=kuknos/laboratory:$1

docker build . --no-cache -t $IMAGE_NAME
docker tag $IMAGE_NAME repository.kuknos.org:3051/$IMAGE_NAME
docker push repository.kuknos.org:3051/$IMAGE_NAME
