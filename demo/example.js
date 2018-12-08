const Graph = require('./../newton/graph')
const GraphData = require('./../newton/graph-data')

const source = require('./data')
const data = new GraphData({
	nodes: source.nodes,
	map: source.linksMap,
	key: 'id'
})

const margin = 40
const graph = new Graph(data, {
	margin: margin,
	height: 550,
	width: window.innerWidth - margin
})

graph.render()

// Fake Data Updata
document.querySelector('#js-update')
	.addEventListener('click', () => {
		// magnesium -> fail
		data.nodes[data.nodes.length-2].status = "down"

		graph.updateData(data)
		graph.render()
	})

document.querySelector('#js-delete')
	.addEventListener('click', () => {
		data.nodes.pop()
		data.links.pop()

		graph.updateData(data)
		graph.render()
	})