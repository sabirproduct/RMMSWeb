//this function extracts the parameter names from a function declaration
// it uses regex to remove comments and then extracts the parameter names from the function signature.
// it returns an array of parameter names.
function getParamNames(func) {
    const fnStr = func.toString().replace(/\/\*.*?\*\/|\/\/.*(?=[\n\r])/g, '');
    const result = fnStr.slice(fnStr.indexOf('(') + 1, fnStr.indexOf(')')).match(/([a-zA-Z0-9_]+)/g);
    return result || [];
}

// this function processes the API request based on the method name and parameters provided in the query string.
function processApiRequest(query) {
    // Check if the query parameter is provided
    if (!query) {
        throw new Error("Query parameter is required.");
    }

    // Parse the query string to extract method name and parameters
    // Example query: {"methodName":"getUser","params":{"id":1}}
    const { methodName, params } = JSON.parse(query);
    const payload = params || {};

    // Validate the method name and parameters
    if (!methodName) {
        throw new Error("Method name is required.");
    }
    if (typeof methodName !== 'string') {
        throw new Error("Invalid method name.");
    }
    if (typeof params !== 'object') {
        throw new Error("Invalid parameters.");
    }
    // Check if the method exists in the DataService class
    const dataService = new DataService();
    const method = dataService[methodName];
    if (typeof method !== 'function') {
        throw new Error("Invalid method name.");
    }

    // Get parameter names by function argument inspection
    const paramNames = getParamNames(dataService[methodName]);
    const args = [];

    // Check if all required parameters are provided
    // and populate the args array with the values from the payload
    for (let name of paramNames) {
        if (!(name in payload)) {
            throw new Error(`Missing required parameter: ${name}`);
        }
        args.push(payload[name]);
    }

    // Call the method with the provided parameters
    return method.apply(dataService, args);
}

class DataService {
    constructor() {
        this.users = [{ id: 1, name: "User1" }, { id: 2, name: "User2" }];
    }

    getAllUsers() {
        return this.users;
    }

    getUser(id) {
        return this.users.find(user => user.id === id);
    }

    updateUser(id, name) {
        return this.users.map(user => {
            if (user.id === id) {
                user.name = name;
            }
            return user;
        });
    }
}

module.exports = { processApiRequest };