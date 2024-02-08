FROM continuumio/miniconda3:latest

# Install additional dependencies
RUN apt-get update --fix-missing && \
    apt-get install -y wget bzip2 ca-certificates curl git && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

RUN conda create -n myenv python=3.9 -y

# Automatically activate the 'myenv' Conda environment every time a new terminal session is started.
RUN echo "conda activate myenv" >> ~/.bashrc

SHELL ["/bin/bash", "--login", "-c"]

RUN conda install -c conda-forge notebook -y

WORKDIR /home/

COPY updated_Spotify_Deep_Learning_Model_with_MLflow.ipynb .

COPY *.csv ./

EXPOSE 8888

CMD ["/opt/conda/envs/myenv/bin/jupyter", "notebook", "--ip=0.0.0.0", "--port=8888", "--no-browser", "--allow-root"]
