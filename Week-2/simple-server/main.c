#include <stdio.h>
#include <stdlib.h>
#include <string.h>

// Include the Windows-specific headers
#include <winsock2.h>

#define PORT 8080
#define BUFFER_SIZE 1024

void handle_client(SOCKET client_socket) {
    char buffer[BUFFER_SIZE];
    memset(buffer, 0, sizeof(buffer));

    // Read the incoming HTTP request
    int bytes_received = recv(client_socket, buffer, sizeof(buffer), 0);
    if (bytes_received == SOCKET_ERROR) {
        perror("Error reading from socket");
        closesocket(client_socket);
        return;
    }

    // Print the received HTTP request
    printf("Received request:\n%s\n", buffer);

    // Send a simple response back to the client
    const char *response = "HTTP/1.1 200 OK\nContent-Type: text/html\n\n<html><body><h1>Hello, World!</h1></body></html>";
    send(client_socket, response, strlen(response), 0);

    // Close the client socket
    closesocket(client_socket);
}

int main() {
    WSADATA wsa;
    SOCKET server_socket, client_socket;
    struct sockaddr_in server_addr, client_addr;
    int client_addr_len = sizeof(client_addr);

    // Initialize Winsock
    if (WSAStartup(MAKEWORD(2, 2), &wsa) != 0) {
        perror("Failed to initialize Winsock");
        return EXIT_FAILURE;
    }

    // Create socket
    if ((server_socket = socket(AF_INET, SOCK_STREAM, 0)) == INVALID_SOCKET) {
        perror("Error creating socket");
        return EXIT_FAILURE;
    }

    // Set up server address struct
    memset(&server_addr, 0, sizeof(server_addr));
    server_addr.sin_family = AF_INET;
    server_addr.sin_addr.s_addr = INADDR_ANY;
    server_addr.sin_port = htons(PORT);

    // Bind socket to address
    if (bind(server_socket, (struct sockaddr*)&server_addr, sizeof(server_addr)) == SOCKET_ERROR) {
        perror("Error binding socket");
        closesocket(server_socket);
        WSACleanup();
        return EXIT_FAILURE;
    }

    // Listen for incoming connections
    if (listen(server_socket, 10) == SOCKET_ERROR) {
        perror("Error listening for connections");
        closesocket(server_socket);
        WSACleanup();
        return EXIT_FAILURE;
    }

    printf("Server listening on port %d...\n", PORT);

    while (1) {
        // Accept a client connection
        if ((client_socket = accept(server_socket, (struct sockaddr*)&client_addr, &client_addr_len)) == INVALID_SOCKET) {
            perror("Error accepting connection");
            continue;
        }

        printf("Accepted connection from %s:%d\n", inet_ntoa(client_addr.sin_addr), ntohs(client_addr.sin_port));

        // Handle the client request
        handle_client(client_socket);
    }

    // Close the server socket and clean up Winsock
    closesocket(server_socket);
    WSACleanup();

    return 0;
}
