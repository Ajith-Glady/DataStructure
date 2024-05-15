class Graph {
   constructor() {
      this.adjacencyList = {}
   }

   addVertex(vertex) {
      if (!this.adjacencyList[vertex]) {
         this.adjacencyList[vertex] = new Set()
      }
   }

   addEdge(vertex1, vertex2) {
      if (!this.adjacencyList[vertex1]) {
         this.addVertex(vertex1)
      }

      if (this.adjacencyList[vertex1]) {
         this.addVertex(vertex2)
      }

      this.adjacencyList[vertex1].add(vertex2)
      this.adjacencyList[vertex2].add(vertex1)
   }

   hasEdge(vertex1, vertex2) {
      return (
         this.adjacencyList[vertex1].has(vertex2) &&
         this.adjacencyList[vertex2].has(vertex1)
      )
   }

   dfs(startVertex){
      const visited = {}
      const result = []

      const check = (vertex) => {
         if(!vertex) return
         visited[vertex] = true
         result.push(vertex)
         for(let nextVertex of this.adjacencyList[vertex]){
            if(!visited[nextVertex]){
               check(nextVertex)
            }
         }
      }
      check(startVertex)
      return result
   }


   bfs(startVertex) {
      const queue = [startVertex];
      const visited = {};
      const result = [];

      visited[startVertex] = true;

      while (queue.length > 0) {
          const currentVertex = queue.shift();
          result.push(currentVertex);

          for (let neighbor of this.adjacencyList[currentVertex]) {
              if (!visited[neighbor]) {
                  visited[neighbor] = true;
                  queue.push(neighbor);
              }
          }
      }

      return result;
  }



  

   removeEdge(vertex1, vertex2) {
      this.adjacencyList[vertex1].delete(vertex2)
      this.adjacencyList[vertex2].delete(vertex1)
   }

   removeVertex(vertex) {
      if (!this.adjacencyList[vertex]) {
         return false
      }
      for (let nextVertex of this.adjacencyList[vertex]) {
         this.removeEdge(nextVertex, vertex)
      }
      delete this.adjacencyList[vertex]
   }

   display() {
      for (let vertex in this.adjacencyList) {
         console.log(vertex + '->' + [...this.adjacencyList[vertex]]);
      }
   }
}

const graph = new Graph()

graph.display()
graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addVertex('T')

graph.addEdge('A', 'B')
graph.addEdge('B', 'T')
graph.addEdge('C', 'B')

console.log(graph.dfs('T'));
graph.display()