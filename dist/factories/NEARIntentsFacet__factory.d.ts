import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { NEARIntentsFacet, NEARIntentsFacetInterface } from "../NEARIntentsFacet";
type NEARIntentsFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class NEARIntentsFacet__factory extends ContractFactory {
    constructor(...args: NEARIntentsFacetConstructorParams);
    deploy(_backendSigner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<NEARIntentsFacet>;
    getDeployTransaction(_backendSigner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): NEARIntentsFacet;
    connect(signer: Signer): NEARIntentsFacet__factory;
    static readonly bytecode = "0x60a0604052348015600e575f5ffd5b506040516125ae3803806125ae833981016040819052602b916061565b6001600160a01b0381166051576040516306b7c75960e31b815260040160405180910390fd5b6001600160a01b0316608052608c565b5f602082840312156070575f5ffd5b81516001600160a01b03811681146085575f5ffd5b9392505050565b60805161250a6100a45f395f610c66015261250a5ff3fe608060405260043610610033575f3560e01c806302631b09146100375780634698f0321461004c578063cc67a1aa1461005f575b5f5ffd5b61004a61004536600461202e565b6100c0565b005b61004a61005a3660046120f4565b610519565b34801561006a575f5ffd5b506100ac61007936600461215e565b5f9081527fc2d2028e37697f276a6fb455a906325dd32709206edce48d1064013d5f9d2a1e602052604090205460ff1690565b604051901515815260200160405180910390f35b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0161013b576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815560608201355f9081527fc2d2028e37697f276a6fb455a906325dd32709206edce48d1064013d5f9d2a1e60208190526040909120548691849160ff16156101b2576040517f5908229b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b81608001354211156101f0576040517f8727a7f900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b602082013561022b576040517fb6256b5e00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f61023c60e0840160c08501612175565b73ffffffffffffffffffffffffffffffffffffffff1603610289576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60a083015173ffffffffffffffffffffffffffffffffffffffff167311f111f111f111f111f111f111f111f111f111f11480156102c557508135155b156102fc576040517f58b0510000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61030c60e0860160c08701612175565b5f6103173447612195565b905089806101000151610356576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8a80610120015115610394576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8b6103b78160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156103ee576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f0361042b576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610468576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6104728d8b610945565b5f6104998e5f01518f60c001518f8f8f60c00160208101906104949190612175565b610cf1565b90508d60c001518111156104dd575f8e60c00151826104b89190612195565b90506104db8f608001518d60c00160208101906104d59190612175565b83610e33565b505b6104e78e8c610e68565b50479250505081811115610509576105095f846105048585612195565b610e33565b50505f9094555050505050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610594576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181556105a1836121cd565b60608301355f9081527fc2d2028e37697f276a6fb455a906325dd32709206edce48d1064013d5f9d2a1e602081905260409091205484919060ff1615610613576040517f5908229b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8160800135421115610651576040517f8727a7f900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b602082013561068c576040517fb6256b5e00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f61069d60e0840160c08501612175565b73ffffffffffffffffffffffffffffffffffffffff16036106ea576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60a083015173ffffffffffffffffffffffffffffffffffffffff167311f111f111f111f111f111f111f111f111f111f114801561072657508135155b1561075d576040517f58b0510000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61076d60e0860160c08701612175565b5f6107783447612195565b9050610783886121cd565b60a081015173ffffffffffffffffffffffffffffffffffffffff166107d4576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f03610811576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361084e576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610857896121cd565b80610100015115610894576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61089d8a6121cd565b806101200151156108da576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6108ec6108e68c6121cd565b8b610945565b6109096108ff60a08d0160808e01612175565b8c60c00135611065565b61091b6109158c6121cd565b8b610e68565b504791505081811115610937576109375f846105048585612195565b50505f909455505050505050565b60a08201515f9073ffffffffffffffffffffffffffffffffffffffff167311f111f111f111f111f111f111f111f111f111f11461099c5760a083015173ffffffffffffffffffffffffffffffffffffffff1661099f565b81355b835160c08501519192505f917f4d5a33c4af83dbad79b202811c07cdb5ba5794247bde504fc57a9da2df04bb0d9190846109df6060880160408901612175565b8860e00151896080015189608001358a606001358b60a001358c602001358d60c0016020810190610a109190612175565b60408051602081019d909d528c019a909a5260608b019890985260808a019690965273ffffffffffffffffffffffffffffffffffffffff94851660a08a015260c089019390935290831660e0880152610100870152610120860152610140850191909152610160840191909152166101808201526101a0016040516020818303038152906040528051906020012090505f610ba4604080518082018252601881527f4c492e4649204e45415220496e74656e7473204661636574000000000000000060209182015281518083018352600181527f31000000000000000000000000000000000000000000000000000000000000009082015281517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f818301527fdf98a75ee2bb051a05361ac569745cad98c226712c281987cdb39642864489ae818401527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a0808301919091528351808303909101815260c0909101909252815191012090565b6040517f19010000000000000000000000000000000000000000000000000000000000006020820152602281019190915260428101839052606201604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152919052805160209091012090505f610c6282610c2960e08801886121d8565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284375f9201919091525061111992505050565b90507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610ce9576040517f8baa579f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b5f82808203610d2c576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f8585610d3a600185612195565b818110610d4957610d49612240565b9050602002810190610d5b919061226d565b610d6c906080810190606001612175565b90505f610d78826111bd565b905073ffffffffffffffffffffffffffffffffffffffff8216610da257610d9f3482612195565b90505b5f610dad8888611207565b9050610db98888611311565b610dc68a8989898561137d565b5f82610dd1856111bd565b610ddb9190612195565b905089811015610e25576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b90526024810182905260440160405180910390fd5b9a9950505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316610e5d57610e5882826115c5565b505050565b610e58838383611632565b5f7fc2d2028e37697f276a6fb455a906325dd32709206edce48d1064013d5f9d2a1e6060830180355f908152602083905260409081902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660011790556080860151929350610eea9291610ee0918601612175565b8560c00151610e33565b610efa6060830160408401612175565b73ffffffffffffffffffffffffffffffffffffffff168260600135845f01517f48a43ef17ee324c018374fc07c4daa0b29fa7f743a8b47f94df100a44988a16e86608001518760c0015187608001358860a001358960200135604051610f9a95949392919073ffffffffffffffffffffffffffffffffffffffff959095168552602085019390935260408401919091526060830152608082015260a00190565b60405180910390a47311f111f111f111f111f111f111f111f111f111f173ffffffffffffffffffffffffffffffffffffffff168360a0015173ffffffffffffffffffffffffffffffffffffffff16036110295760e08301518351604051843581527f815cd8dc72093a13fe3577112c391b6279303956526382ab98772d0239dbf78c9060200160405180910390a35b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f18360405161105891906122f5565b60405180910390a1505050565b805f0361109e576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166110f757803410156110f3576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6110f373ffffffffffffffffffffffffffffffffffffffff83163330846116a0565b604051600190835f526020830151604052604083510361116d57604083015160ff81901c601b016020527f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff16606052611191565b604183510361118d5760608301515f1a6020526040830151606052611191565b5f91505b6020600160805f855afa5191503d6111b057638baa579f5f526004601cfd5b5f60605260405292915050565b5f73ffffffffffffffffffffffffffffffffffffffff8216156111ff576111fa73ffffffffffffffffffffffffffffffffffffffff8316306116f8565b611201565b475b92915050565b6060815f8167ffffffffffffffff81111561122457611224611df8565b60405190808252806020026020018201604052801561124d578160200160208202803683370190505b5090505f5f5b838110156113065786868281811061126d5761126d612240565b905060200281019061127f919061226d565b611290906080810190606001612175565b915061129b826111bd565b8382815181106112ad576112ad612240565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff82166112fe57348382815181106112e6576112e6612240565b602002602001018181516112fa9190612195565b9052505b600101611253565b509095945050505050565b5f5b81811015610e58573683838381811061132e5761132e612240565b9050602002810190611340919061226d565b905061135260e0820160c08301612408565b156113745761137461136a6060830160408401612175565b8260800135611065565b50600101611313565b83838383825f80805b838110156115a957368c8c838181106113a1576113a1612240565b90506020028101906113b3919061226d565b90506113c26020820182612175565b93506113d46040820160208301612175565b9250611477846113e760a08401846121d8565b6113f5916004915f91612421565b6113fe91612448565b73ffffffffffffffffffffffffffffffffffffffff919091165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f24602090815260408083207fffffffff000000000000000000000000000000000000000000000000000000009094168352929052205460ff1690565b158061155f57506114ab6114916060830160408401612175565b73ffffffffffffffffffffffffffffffffffffffff161590565b1580156114e457508373ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614155b801561155f575073ffffffffffffffffffffffffffffffffffffffff83165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f24602090815260408083207fffffffff00000000000000000000000000000000000000000000000000000000845290915290205460ff16155b15611596576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6115a08e8261172b565b50600101611386565b505050506115ba848484845f61199e565b505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8216611612576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6110f373ffffffffffffffffffffffffffffffffffffffff831682611bb5565b73ffffffffffffffffffffffffffffffffffffffff821661167f576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610e5873ffffffffffffffffffffffffffffffffffffffff84168383611bce565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f511417166116eb57637939f4245f526004601cfd5b5f60605260405250505050565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b61174361173b6020830183612175565b6017903b1190565b611779576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f8190036117b8576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6117cc6114916060850160408601612175565b6117d6575f6117dc565b82608001355b90505f6117f76117f26080860160608701612175565b6111bd565b9050815f0361182d5761182d6118136060860160408701612175565b6118236040870160208801612175565b8660800135611c17565b5f8061183c6020870187612175565b73ffffffffffffffffffffffffffffffffffffffff168461186060a08901896121d8565b60405161186e9291906124ae565b5f6040518083038185875af1925050503d805f81146118a8576040519150601f19603f3d011682016040523d82523d5f602084013e6118ad565b606091505b5091509150816118c0576118c081611c43565b5f6118d46117f26080890160608a01612175565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388861190560208a018a612175565b61191560608b0160408c01612175565b61192560808c0160608d01612175565b8b608001358987116119375786611941565b6119418a88612195565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b835f86826119ad600182612195565b8181106119bc576119bc612240565b90506020028101906119ce919061226d565b6119df906080810190606001612175565b90505f5f5f5f5f5f5f5b88811015611ba5576119fc60018a612195565b81108015611a0b575088600114155b15611ae6578d8d82818110611a2257611a22612240565b9050602002810190611a34919061226d565b611a45906080810190606001612175565b95508773ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff1614611ae6578a8181518110611a8c57611a8c612240565b6020026020010151611a9d876111bd565b611aa79190612195565b965073ffffffffffffffffffffffffffffffffffffffff861615611acb575f611acd565b895b935083871115611ae657611ae6868d610504878b612195565b8d8d82818110611af857611af8612240565b9050602002810190611b0a919061226d565b611b1b906060810190604001612175565b9450611b26856111bd565b925073ffffffffffffffffffffffffffffffffffffffff851615611b4a575f611b4c565b895b91508183118015611b8957508773ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614155b15611b9d57611b9d858d6105048587612195565b6001016119e9565b5050505050505050505050505050565b5f385f3884865af16110f35763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f51141716611c0e576390b8ec185f526004601cfd5b5f603452505050565b610e588383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611c4d565b8051602082018181fd5b73ffffffffffffffffffffffffffffffffffffffff841615611d745773ffffffffffffffffffffffffffffffffffffffff8316611cb6576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015611d29573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611d4d91906124bd565b1015611d7457611d7473ffffffffffffffffffffffffffffffffffffffff85168483611d7a565b50505050565b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f51141716611c0e575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f51141716611c0e57633e3f8f735f526004601cfd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff81118282101715611e4957611e49611df8565b60405290565b5f82601f830112611e5e575f5ffd5b813567ffffffffffffffff811115611e7857611e78611df8565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810167ffffffffffffffff81118282101715611ec557611ec5611df8565b604052818152838201602001851015611edc575f5ffd5b816020850160208301375f918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff81168114611f1b575f5ffd5b919050565b80358015158114611f1b575f5ffd5b5f6101408284031215611f40575f5ffd5b611f48611e25565b823581529050602082013567ffffffffffffffff811115611f67575f5ffd5b611f7384828501611e4f565b602083015250604082013567ffffffffffffffff811115611f92575f5ffd5b611f9e84828501611e4f565b604083015250611fb060608301611ef8565b6060820152611fc160808301611ef8565b6080820152611fd260a08301611ef8565b60a082015260c0828101359082015260e08083013590820152611ff86101008301611f20565b61010082015261200b6101208301611f20565b61012082015292915050565b5f6101008284031215612028575f5ffd5b50919050565b5f5f5f5f60608587031215612041575f5ffd5b843567ffffffffffffffff811115612057575f5ffd5b61206387828801611f2f565b945050602085013567ffffffffffffffff81111561207f575f5ffd5b8501601f8101871361208f575f5ffd5b803567ffffffffffffffff8111156120a5575f5ffd5b8760208260051b84010111156120b9575f5ffd5b60209190910193509150604085013567ffffffffffffffff8111156120dc575f5ffd5b6120e887828801612017565b91505092959194509250565b5f5f60408385031215612105575f5ffd5b823567ffffffffffffffff81111561211b575f5ffd5b8301610140818603121561212d575f5ffd5b9150602083013567ffffffffffffffff811115612148575f5ffd5b61215485828601612017565b9150509250929050565b5f6020828403121561216e575f5ffd5b5035919050565b5f60208284031215612185575f5ffd5b61218e82611ef8565b9392505050565b81810381811115611201577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f6112013683611f2f565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261220b575f5ffd5b83018035915067ffffffffffffffff821115612225575f5ffd5b602001915036819003821315612239575f5ffd5b9250929050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2183360301811261229f575f5ffd5b9190910192915050565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b60208152815160208201525f6020830151610140604084015261231c6101608401826122a9565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe084830301606085015261235782826122a9565b9150506060840151612381608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e08401516101008401526101008401516123f061012085018215159052565b50610120840151801515610140850152509392505050565b5f60208284031215612418575f5ffd5b61218e82611f20565b5f5f8585111561242f575f5ffd5b8386111561243b575f5ffd5b5050820193919092039150565b80357fffffffff0000000000000000000000000000000000000000000000000000000081169060048410156124a7577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b818382375f9101908152919050565b5f602082840312156124cd575f5ffd5b505191905056fea2646970667358221220e2b0e971ee3d9fe62006e1736a3c5cabfcf88f82166e31e0c1f1d9ebaba3d09c64736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_backendSigner";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "isQuoteConsumed";
        readonly inputs: readonly [{
            readonly name: "_quoteId";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [{
            readonly name: "consumed";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaNEARIntents";
        readonly inputs: readonly [{
            readonly name: "_bridgeData";
            readonly type: "tuple";
            readonly internalType: "struct ILiFi.BridgeData";
            readonly components: readonly [{
                readonly name: "transactionId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "bridge";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "integrator";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "referrer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receiver";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "minAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationChainId";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "hasSourceSwaps";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "hasDestinationCall";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }, {
            readonly name: "_nearData";
            readonly type: "tuple";
            readonly internalType: "struct NEARIntentsFacet.NEARIntentsData";
            readonly components: readonly [{
                readonly name: "nonEVMReceiver";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "destinationAsset";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "depositAddress";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "quoteId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "deadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "minAmountOut";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "refundRecipient";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "signature";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaNEARIntents";
        readonly inputs: readonly [{
            readonly name: "_bridgeData";
            readonly type: "tuple";
            readonly internalType: "struct ILiFi.BridgeData";
            readonly components: readonly [{
                readonly name: "transactionId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "bridge";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "integrator";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "referrer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receiver";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "minAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationChainId";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "hasSourceSwaps";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "hasDestinationCall";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }, {
            readonly name: "_swapData";
            readonly type: "tuple[]";
            readonly internalType: "struct LibSwap.SwapData[]";
            readonly components: readonly [{
                readonly name: "callTo";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "approveTo";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receivingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "fromAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "callData";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "requiresDeposit";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }, {
            readonly name: "_nearData";
            readonly type: "tuple";
            readonly internalType: "struct NEARIntentsFacet.NEARIntentsData";
            readonly components: readonly [{
                readonly name: "nonEVMReceiver";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "destinationAsset";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "depositAddress";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "quoteId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "deadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "minAmountOut";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "refundRecipient";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "signature";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "event";
        readonly name: "AssetSwapped";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: false;
            readonly internalType: "bytes32";
        }, {
            readonly name: "dex";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "fromAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "toAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "fromAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "toAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "timestamp";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "BridgeToNonEVMChain";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "destinationChainId";
            readonly type: "uint256";
            readonly indexed: true;
            readonly internalType: "uint256";
        }, {
            readonly name: "receiver";
            readonly type: "bytes";
            readonly indexed: false;
            readonly internalType: "bytes";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "BridgeToNonEVMChainBytes32";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "destinationChainId";
            readonly type: "uint256";
            readonly indexed: true;
            readonly internalType: "uint256";
        }, {
            readonly name: "receiver";
            readonly type: "bytes32";
            readonly indexed: false;
            readonly internalType: "bytes32";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiGenericSwapCompleted";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "integrator";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "referrer";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "fromAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "toAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "fromAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "toAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiSwappedGeneric";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "integrator";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "referrer";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "fromAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "toAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "fromAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "toAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiTransferCompleted";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "receivingAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "timestamp";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiTransferRecovered";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "receivingAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "timestamp";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiTransferStarted";
        readonly inputs: readonly [{
            readonly name: "bridgeData";
            readonly type: "tuple";
            readonly indexed: false;
            readonly internalType: "struct ILiFi.BridgeData";
            readonly components: readonly [{
                readonly name: "transactionId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "bridge";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "integrator";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "referrer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receiver";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "minAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationChainId";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "hasSourceSwaps";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "hasDestinationCall";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "NEARIntentsBridgeStarted";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "quoteId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "depositAddress";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "sendingAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "deadline";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "minAmountOut";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "destinationAsset";
            readonly type: "bytes32";
            readonly indexed: false;
            readonly internalType: "bytes32";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "error";
        readonly name: "CannotBridgeToSameNetwork";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "ContractCallNotAllowed";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "CumulativeSlippageTooHigh";
        readonly inputs: readonly [{
            readonly name: "minAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "receivedAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }, {
        readonly type: "error";
        readonly name: "InformationMismatch";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidAmount";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidCallData";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidConfig";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidContract";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidDestinationAsset";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidNonEVMReceiver";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidReceiver";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidSignature";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NoSwapDataProvided";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NoSwapFromZeroBalance";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NullAddrIsNotAValidSpender";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "QuoteAlreadyConsumed";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "QuoteExpired";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "ReentrancyError";
        readonly inputs: readonly [];
    }];
    static createInterface(): NEARIntentsFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): NEARIntentsFacet;
}
export {};
