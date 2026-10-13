import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { M0Facet, M0FacetInterface } from "../M0Facet";
type M0FacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class M0Facet__factory extends ContractFactory {
    constructor(...args: M0FacetConstructorParams);
    deploy(_orderBook: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<M0Facet>;
    getDeployTransaction(_orderBook: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): M0Facet;
    connect(signer: Signer): M0Facet__factory;
    static readonly bytecode = "0x60a060405234801561000f575f5ffd5b506040516123d93803806123d983398101604081905261002e91610066565b6001600160a01b038116610055576040516306b7c75960e31b815260040160405180910390fd5b6001600160a01b0316608052610093565b5f60208284031215610076575f5ffd5b81516001600160a01b038116811461008c575f5ffd5b9392505050565b6080516123216100b85f395f8181607c01528181610a210152610a5d01526123215ff3fe608060405260043610610033575f3560e01c806365782c4b14610037578063b9eaf86d14610058578063ca72c3411461006b575b5f5ffd5b348015610042575f5ffd5b50610056610051366004611d6b565b6100c7565b005b610056610066366004611db8565b6102ee565b348015610076575f5ffd5b5061009e7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610142576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815560a0830151839073ffffffffffffffffffffffffffffffffffffffff16610199576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036101d6576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8380610100015115610214576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8480610120015115610252576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b85610275816080015173ffffffffffffffffffffffffffffffffffffffff161590565b156102ac576040517f5ded599700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102b68787610692565b6102c887608001518860c00151610963565b6102e287876102dd60c0820160a08301611e66565b610a17565b50505f90925550505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610369576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815561037d6040830160208401611e9c565b5f6103883447611eb5565b9050866103ad8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156103e4576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f03610421576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8780610100015161045e576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b888061012001511561049c576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b896104bf816080015173ffffffffffffffffffffffffffffffffffffffff161590565b156104f6576040517f5ded599700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6105008b89610692565b881580159061057d575060808b015173ffffffffffffffffffffffffffffffffffffffff168a8a610532600182611eb5565b81811061054157610541611eed565b90506020028101906105539190611f1a565b610564906080810190606001611e9c565b73ffffffffffffffffffffffffffffffffffffffff1614155b156105b4576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f8b60c0015190505f6105df8d5f0151838e8e8e60200160208101906105da9190611e9c565b610c93565b90505f61060e6105f560c08d0160a08e01611e66565b6fffffffffffffffffffffffffffffffff168385610dd5565b9050805f03610649576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60c08e0182905261065e8e8c6102dd84610dfa565b505050505050505f47905081811115610685576106855f846106808585611eb5565b610e1f565b50505f9091555050505050565b5f6106a36040830160208401611e9c565b73ffffffffffffffffffffffffffffffffffffffff16036106f0576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6107016060830160408401611e9c565b73ffffffffffffffffffffffffffffffffffffffff160361074e576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6060810135610789576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6107978360e00151610e4f565b9150507311f111f111f111f111f111f111f111f111f111f173ffffffffffffffffffffffffffffffffffffffff168360a0015173ffffffffffffffffffffffffffffffffffffffff1603610859578061081c576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8135610854576040517f58b0510000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050565b8015610891576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60a083015173ffffffffffffffffffffffffffffffffffffffff168235146108e5576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b606082013560a01c15610924576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608082013560a01c15610854576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b805f0361099c576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166109f557803410156109f1576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6109f173ffffffffffffffffffffffffffffffffffffffff8316333084610ed9565b610a4a83608001517f00000000000000000000000000000000000000000000000000000000000000008560c00151610f31565b5f610a588460e00151610e4f565b5090507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16633c48b0a26040518061012001604052808463ffffffff1681526020018660c0016020810190610ac29190611f56565b63ffffffff168152602001876080015173ffffffffffffffffffffffffffffffffffffffff16815260200186606001358152602001610b048860c00151610dfa565b6fffffffffffffffffffffffffffffffff168152602001856fffffffffffffffffffffffffffffffff168152602001865f0135815260200186608001358152602001866040016020810190610b599190611e9c565b73ffffffffffffffffffffffffffffffffffffffff168152506040518263ffffffff1660e01b8152600401610b8e9190611f79565b6020604051808303815f875af1158015610baa573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610bce9190612059565b507311f111f111f111f111f111f111f111f111f111f173ffffffffffffffffffffffffffffffffffffffff168460a0015173ffffffffffffffffffffffffffffffffffffffff1603610c565760e08401518451604051853581527f815cd8dc72093a13fe3577112c391b6279303956526382ab98772d0239dbf78c9060200160405180910390a35b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f184604051610c8591906120bc565b60405180910390a150505050565b5f82808203610cce576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f8585610cdc600185611eb5565b818110610ceb57610ceb611eed565b9050602002810190610cfd9190611f1a565b610d0e906080810190606001611e9c565b90505f610d1a82610f5d565b905073ffffffffffffffffffffffffffffffffffffffff8216610d4457610d413482611eb5565b90505b5f610d4f8888610fa7565b9050610d5b88886110b1565b610d688a8989898561111d565b5f82610d7385610f5d565b610d7d9190611eb5565b905089811015610dc7576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b90526024810182905260440160405180910390fd5b9a9950505050505050505050565b82820283158482048414178202610df35763ad251c275f526004601cfd5b0492915050565b5f7001000000000000000000000000000000008210610e1b57610e1b611365565b5090565b73ffffffffffffffffffffffffffffffffffffffff8316610e44576108548282611372565b6108548383836113df565b5f5f660416edef1601be8303610e6e575063536f6c4d92600192509050565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffac9093b38301610ec7576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610ed08361144d565b935f9350915050565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f51141716610f2457637939f4245f526004601cfd5b5f60605260405250505050565b6108548383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611462565b5f73ffffffffffffffffffffffffffffffffffffffff821615610f9f57610f9a73ffffffffffffffffffffffffffffffffffffffff83163061158f565b610fa1565b475b92915050565b6060815f8167ffffffffffffffff811115610fc457610fc4611b36565b604051908082528060200260200182016040528015610fed578160200160208202803683370190505b5090505f5f5b838110156110a65786868281811061100d5761100d611eed565b905060200281019061101f9190611f1a565b611030906080810190606001611e9c565b915061103b82610f5d565b83828151811061104d5761104d611eed565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff821661109e573483828151811061108657611086611eed565b6020026020010181815161109a9190611eb5565b9052505b600101610ff3565b509095945050505050565b5f5b8181101561085457368383838181106110ce576110ce611eed565b90506020028101906110e09190611f1a565b90506110f260e0820160c083016121cf565b156111145761111461110a6060830160408401611e9c565b8260800135610963565b506001016110b3565b83838383825f80805b8381101561134957368c8c8381811061114157611141611eed565b90506020028101906111539190611f1a565b90506111626020820182611e9c565b93506111746040820160208301611e9c565b92506112178461118760a08401846121e8565b611195916004915f91612250565b61119e91612277565b73ffffffffffffffffffffffffffffffffffffffff919091165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f24602090815260408083207fffffffff000000000000000000000000000000000000000000000000000000009094168352929052205460ff1690565b15806112ff575061124b6112316060830160408401611e9c565b73ffffffffffffffffffffffffffffffffffffffff161590565b15801561128457508373ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614155b80156112ff575073ffffffffffffffffffffffffffffffffffffffff83165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f24602090815260408083207fffffffff00000000000000000000000000000000000000000000000000000000845290915290205460ff16155b15611336576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6113408e826115c2565b50600101611126565b5050505061135a848484845f611835565b505050505050505050565b6335278d125f526004601cfd5b73ffffffffffffffffffffffffffffffffffffffff82166113bf576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6109f173ffffffffffffffffffffffffffffffffffffffff831682611a4c565b73ffffffffffffffffffffffffffffffffffffffff821661142c576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61085473ffffffffffffffffffffffffffffffffffffffff84168383611a65565b5f6401000000008210610e1b57610e1b611365565b73ffffffffffffffffffffffffffffffffffffffff8416156115895773ffffffffffffffffffffffffffffffffffffffff83166114cb576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa15801561153e573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906115629190612059565b10156115895761158973ffffffffffffffffffffffffffffffffffffffff85168483611aae565b50505050565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b6115da6115d26020830183611e9c565b6017903b1190565b611610576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f81900361164f576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6116636112316060850160408601611e9c565b61166d575f611673565b82608001355b90505f61168e6116896080860160608701611e9c565b610f5d565b9050815f036116c4576116c46116aa6060860160408701611e9c565b6116ba6040870160208801611e9c565b8660800135610f31565b5f806116d36020870187611e9c565b73ffffffffffffffffffffffffffffffffffffffff16846116f760a08901896121e8565b6040516117059291906122dc565b5f6040518083038185875af1925050503d805f811461173f576040519150601f19603f3d011682016040523d82523d5f602084013e611744565b606091505b5091509150816117575761175781611b2c565b5f61176b6116896080890160608a01611e9c565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388861179c60208a018a611e9c565b6117ac60608b0160408c01611e9c565b6117bc60808c0160608d01611e9c565b8b608001358987116117ce57866117d8565b6117d88a88611eb5565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b835f8682611844600182611eb5565b81811061185357611853611eed565b90506020028101906118659190611f1a565b611876906080810190606001611e9c565b90505f5f5f5f5f5f5f5b88811015611a3c5761189360018a611eb5565b811080156118a2575088600114155b1561197d578d8d828181106118b9576118b9611eed565b90506020028101906118cb9190611f1a565b6118dc906080810190606001611e9c565b95508773ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff161461197d578a818151811061192357611923611eed565b602002602001015161193487610f5d565b61193e9190611eb5565b965073ffffffffffffffffffffffffffffffffffffffff861615611962575f611964565b895b93508387111561197d5761197d868d610680878b611eb5565b8d8d8281811061198f5761198f611eed565b90506020028101906119a19190611f1a565b6119b2906060810190604001611e9c565b94506119bd85610f5d565b925073ffffffffffffffffffffffffffffffffffffffff8516156119e1575f6119e3565b895b91508183118015611a2057508773ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614155b15611a3457611a34858d6106808587611eb5565b600101611880565b5050505050505050505050505050565b5f385f3884865af16109f15763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f51141716611aa5576390b8ec185f526004601cfd5b5f603452505050565b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f51141716611aa5575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f51141716611aa557633e3f8f735f526004601cfd5b8051602082018181fd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff81118282101715611b8757611b87611b36565b60405290565b5f82601f830112611b9c575f5ffd5b813567ffffffffffffffff811115611bb657611bb6611b36565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810167ffffffffffffffff81118282101715611c0357611c03611b36565b604052818152838201602001851015611c1a575f5ffd5b816020850160208301375f918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff81168114611c59575f5ffd5b919050565b80358015158114611c59575f5ffd5b5f6101408284031215611c7e575f5ffd5b611c86611b63565b823581529050602082013567ffffffffffffffff811115611ca5575f5ffd5b611cb184828501611b8d565b602083015250604082013567ffffffffffffffff811115611cd0575f5ffd5b611cdc84828501611b8d565b604083015250611cee60608301611c36565b6060820152611cff60808301611c36565b6080820152611d1060a08301611c36565b60a082015260c0828101359082015260e08083013590820152611d366101008301611c5e565b610100820152611d496101208301611c5e565b61012082015292915050565b5f60e08284031215611d65575f5ffd5b50919050565b5f5f6101008385031215611d7d575f5ffd5b823567ffffffffffffffff811115611d93575f5ffd5b611d9f85828601611c6d565b925050611daf8460208501611d55565b90509250929050565b5f5f5f5f6101208587031215611dcc575f5ffd5b843567ffffffffffffffff811115611de2575f5ffd5b611dee87828801611c6d565b945050602085013567ffffffffffffffff811115611e0a575f5ffd5b8501601f81018713611e1a575f5ffd5b803567ffffffffffffffff811115611e30575f5ffd5b8760208260051b8401011115611e44575f5ffd5b60209190910193509150611e5b8660408701611d55565b905092959194509250565b5f60208284031215611e76575f5ffd5b81356fffffffffffffffffffffffffffffffff81168114611e95575f5ffd5b9392505050565b5f60208284031215611eac575f5ffd5b611e9582611c36565b81810381811115610fa1577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112611f4c575f5ffd5b9190910192915050565b5f60208284031215611f66575f5ffd5b813563ffffffff81168114611e95575f5ffd5b5f6101208201905063ffffffff835116825263ffffffff60208401511660208301526040830151611fc2604084018273ffffffffffffffffffffffffffffffffffffffff169052565b50606083015160608301526080830151611ff060808401826fffffffffffffffffffffffffffffffff169052565b5060a083015161201460a08401826fffffffffffffffffffffffffffffffff169052565b5060c083015160c083015260e083015160e083015261010083015161205261010084018273ffffffffffffffffffffffffffffffffffffffff169052565b5092915050565b5f60208284031215612069575f5ffd5b5051919050565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b60208152815160208201525f602083015161014060408401526120e3610160840182612070565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe084830301606085015261211e8282612070565b9150506060840151612148608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e08401516101008401526101008401516121b761012085018215159052565b50610120840151801515610140850152509392505050565b5f602082840312156121df575f5ffd5b611e9582611c5e565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261221b575f5ffd5b83018035915067ffffffffffffffff821115612235575f5ffd5b602001915036819003821315612249575f5ffd5b9250929050565b5f5f8585111561225e575f5ffd5b8386111561226a575f5ffd5b5050820193919092039150565b80357fffffffff000000000000000000000000000000000000000000000000000000008116906004841015612052577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505092915050565b818382375f910190815291905056fea2646970667358221220944553ca7661c2cfe897ec6c7c0bc1357114dd1f21140dd51784a10988ffd99664736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_orderBook";
            readonly type: "address";
            readonly internalType: "contract IM0OrderBook";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "M0_ORDER_BOOK";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IM0OrderBook";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaM0";
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
            readonly name: "_m0Data";
            readonly type: "tuple";
            readonly internalType: "struct M0Facet.M0Data";
            readonly components: readonly [{
                readonly name: "receiverAddress";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "refundRecipient";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "orderOwner";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "tokenOut";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "solver";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "amountOut";
                readonly type: "uint128";
                readonly internalType: "uint128";
            }, {
                readonly name: "fillDeadline";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaM0";
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
            readonly name: "_m0Data";
            readonly type: "tuple";
            readonly internalType: "struct M0Facet.M0Data";
            readonly components: readonly [{
                readonly name: "receiverAddress";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "refundRecipient";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "orderOwner";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "tokenOut";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "solver";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "amountOut";
                readonly type: "uint128";
                readonly internalType: "uint128";
            }, {
                readonly name: "fillDeadline";
                readonly type: "uint32";
                readonly internalType: "uint32";
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
        readonly name: "InvalidNonEVMReceiver";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidReceiver";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NativeAssetNotSupported";
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
        readonly name: "ReentrancyError";
        readonly inputs: readonly [];
    }];
    static createInterface(): M0FacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): M0Facet;
}
export {};
