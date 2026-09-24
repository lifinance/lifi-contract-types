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
    static readonly bytecode = "0x60a060405234801561000f575f5ffd5b506040516122f03803806122f083398101604081905261002e91610066565b6001600160a01b038116610055576040516306b7c75960e31b815260040160405180910390fd5b6001600160a01b0316608052610093565b5f60208284031215610076575f5ffd5b81516001600160a01b038116811461008c575f5ffd5b9392505050565b6080516122386100b85f395f8181607c015281816109a301526109ce01526122385ff3fe608060405260043610610033575f3560e01c806365782c4b14610037578063b9eaf86d14610058578063ca72c3411461006b575b5f5ffd5b348015610042575f5ffd5b50610056610051366004611c82565b6100c7565b005b610056610066366004611ccf565b6102ee565b348015610076575f5ffd5b5061009e7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610142576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815560a0830151839073ffffffffffffffffffffffffffffffffffffffff16610199576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036101d6576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8380610100015115610214576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8480610120015115610252576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b85610275816080015173ffffffffffffffffffffffffffffffffffffffff161590565b156102ac576040517f5ded599700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102b68787610692565b6102c887608001518860c001516108e5565b6102e287876102dd60c0820160a08301611d7d565b610999565b50505f90925550505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610369576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815561037d6040830160208401611db3565b5f6103883447611dcc565b9050866103ad8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156103e4576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f03610421576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8780610100015161045e576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b888061012001511561049c576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b896104bf816080015173ffffffffffffffffffffffffffffffffffffffff161590565b156104f6576040517f5ded599700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6105008b89610692565b881580159061057d575060808b015173ffffffffffffffffffffffffffffffffffffffff168a8a610532600182611dcc565b81811061054157610541611e04565b90506020028101906105539190611e31565b610564906080810190606001611db3565b73ffffffffffffffffffffffffffffffffffffffff1614155b156105b4576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f8b60c0015190505f6105df8d5f0151838e8e8e60200160208101906105da9190611db3565b610c0c565b90505f61060e6105f560c08d0160a08e01611d7d565b6fffffffffffffffffffffffffffffffff168385610d4e565b9050805f03610649576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60c08e0182905261065e8e8c6102dd84610d73565b505050505050505f47905081811115610685576106855f846106808585611dcc565b610d98565b50505f9091555050505050565b5f6106a36040830160208401611db3565b73ffffffffffffffffffffffffffffffffffffffff16036106f0576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6107016060830160408401611db3565b73ffffffffffffffffffffffffffffffffffffffff160361074e576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6060810135610789576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f660416edef1601be8360e001511490507311f111f111f111f111f111f111f111f111f111f173ffffffffffffffffffffffffffffffffffffffff168360a0015173ffffffffffffffffffffffffffffffffffffffff1603610859578061081c576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8135610854576040517f58b0510000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050565b8015610891576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60a083015173ffffffffffffffffffffffffffffffffffffffff16823514610854576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b805f0361091e576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166109775780341015610973576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b61097373ffffffffffffffffffffffffffffffffffffffff8316333084610dc8565b6109cc83608001517f00000000000000000000000000000000000000000000000000000000000000008560c00151610e20565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16633c48b0a2604051806101200160405280610a218760e00151610e4c565b63ffffffff168152602001610a3c60e0870160c08801611e6d565b63ffffffff168152602001866080015173ffffffffffffffffffffffffffffffffffffffff16815260200185606001358152602001610a7e8760c00151610d73565b6fffffffffffffffffffffffffffffffff168152602001846fffffffffffffffffffffffffffffffff168152602001855f0135815260200185608001358152602001856040016020810190610ad39190611db3565b73ffffffffffffffffffffffffffffffffffffffff168152506040518263ffffffff1660e01b8152600401610b089190611e90565b6020604051808303815f875af1158015610b24573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610b489190611f70565b507311f111f111f111f111f111f111f111f111f111f173ffffffffffffffffffffffffffffffffffffffff168360a0015173ffffffffffffffffffffffffffffffffffffffff1603610bd05760e08301518351604051843581527f815cd8dc72093a13fe3577112c391b6279303956526382ab98772d0239dbf78c9060200160405180910390a35b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f183604051610bff9190611fd3565b60405180910390a1505050565b5f82808203610c47576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f8585610c55600185611dcc565b818110610c6457610c64611e04565b9050602002810190610c769190611e31565b610c87906080810190606001611db3565b90505f610c9382610e75565b905073ffffffffffffffffffffffffffffffffffffffff8216610cbd57610cba3482611dcc565b90505b5f610cc88888610ebe565b9050610cd48888610fc8565b610ce18a89898985611034565b5f82610cec85610e75565b610cf69190611dcc565b905089811015610d40576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b90526024810182905260440160405180910390fd5b9a9950505050505050505050565b82820283158482048414178202610d6c5763ad251c275f526004601cfd5b0492915050565b5f7001000000000000000000000000000000008210610d9457610d9461127c565b5090565b73ffffffffffffffffffffffffffffffffffffffff8316610dbd576108548282611289565b6108548383836112f6565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f51141716610e1357637939f4245f526004601cfd5b5f60605260405250505050565b6108548383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611364565b5f660416edef1601be8203610e66575063536f6c4d919050565b610e6f82611491565b92915050565b5f73ffffffffffffffffffffffffffffffffffffffff821615610eb757610eb273ffffffffffffffffffffffffffffffffffffffff8316306114a6565b610e6f565b4792915050565b6060815f8167ffffffffffffffff811115610edb57610edb611a4d565b604051908082528060200260200182016040528015610f04578160200160208202803683370190505b5090505f5f5b83811015610fbd57868682818110610f2457610f24611e04565b9050602002810190610f369190611e31565b610f47906080810190606001611db3565b9150610f5282610e75565b838281518110610f6457610f64611e04565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610fb55734838281518110610f9d57610f9d611e04565b60200260200101818151610fb19190611dcc565b9052505b600101610f0a565b509095945050505050565b5f5b818110156108545736838383818110610fe557610fe5611e04565b9050602002810190610ff79190611e31565b905061100960e0820160c083016120e6565b1561102b5761102b6110216060830160408401611db3565b82608001356108e5565b50600101610fca565b83838383825f80805b8381101561126057368c8c8381811061105857611058611e04565b905060200281019061106a9190611e31565b90506110796020820182611db3565b935061108b6040820160208301611db3565b925061112e8461109e60a08401846120ff565b6110ac916004915f91612167565b6110b59161218e565b73ffffffffffffffffffffffffffffffffffffffff919091165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f24602090815260408083207fffffffff000000000000000000000000000000000000000000000000000000009094168352929052205460ff1690565b158061121657506111626111486060830160408401611db3565b73ffffffffffffffffffffffffffffffffffffffff161590565b15801561119b57508373ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614155b8015611216575073ffffffffffffffffffffffffffffffffffffffff83165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f24602090815260408083207fffffffff00000000000000000000000000000000000000000000000000000000845290915290205460ff16155b1561124d576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6112578e826114d9565b5060010161103d565b50505050611271848484845f61174c565b505050505050505050565b6335278d125f526004601cfd5b73ffffffffffffffffffffffffffffffffffffffff82166112d6576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61097373ffffffffffffffffffffffffffffffffffffffff831682611963565b73ffffffffffffffffffffffffffffffffffffffff8216611343576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61085473ffffffffffffffffffffffffffffffffffffffff8416838361197c565b73ffffffffffffffffffffffffffffffffffffffff84161561148b5773ffffffffffffffffffffffffffffffffffffffff83166113cd576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015611440573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906114649190611f70565b101561148b5761148b73ffffffffffffffffffffffffffffffffffffffff851684836119c5565b50505050565b5f6401000000008210610d9457610d9461127c565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b6114f16114e96020830183611db3565b6017903b1190565b611527576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f819003611566576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f61157a6111486060850160408601611db3565b611584575f61158a565b82608001355b90505f6115a56115a06080860160608701611db3565b610e75565b9050815f036115db576115db6115c16060860160408701611db3565b6115d16040870160208801611db3565b8660800135610e20565b5f806115ea6020870187611db3565b73ffffffffffffffffffffffffffffffffffffffff168461160e60a08901896120ff565b60405161161c9291906121f3565b5f6040518083038185875af1925050503d805f8114611656576040519150601f19603f3d011682016040523d82523d5f602084013e61165b565b606091505b50915091508161166e5761166e81611a43565b5f6116826115a06080890160608a01611db3565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b38886116b360208a018a611db3565b6116c360608b0160408c01611db3565b6116d360808c0160608d01611db3565b8b608001358987116116e557866116ef565b6116ef8a88611dcc565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b835f868261175b600182611dcc565b81811061176a5761176a611e04565b905060200281019061177c9190611e31565b61178d906080810190606001611db3565b90505f5f5f5f5f5f5f5b88811015611953576117aa60018a611dcc565b811080156117b9575088600114155b15611894578d8d828181106117d0576117d0611e04565b90506020028101906117e29190611e31565b6117f3906080810190606001611db3565b95508773ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff1614611894578a818151811061183a5761183a611e04565b602002602001015161184b87610e75565b6118559190611dcc565b965073ffffffffffffffffffffffffffffffffffffffff861615611879575f61187b565b895b93508387111561189457611894868d610680878b611dcc565b8d8d828181106118a6576118a6611e04565b90506020028101906118b89190611e31565b6118c9906060810190604001611db3565b94506118d485610e75565b925073ffffffffffffffffffffffffffffffffffffffff8516156118f8575f6118fa565b895b9150818311801561193757508773ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614155b1561194b5761194b858d6106808587611dcc565b600101611797565b5050505050505050505050505050565b5f385f3884865af16109735763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f511417166119bc576390b8ec185f526004601cfd5b5f603452505050565b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f511417166119bc575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f511417166119bc57633e3f8f735f526004601cfd5b8051602082018181fd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff81118282101715611a9e57611a9e611a4d565b60405290565b5f82601f830112611ab3575f5ffd5b813567ffffffffffffffff811115611acd57611acd611a4d565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810167ffffffffffffffff81118282101715611b1a57611b1a611a4d565b604052818152838201602001851015611b31575f5ffd5b816020850160208301375f918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff81168114611b70575f5ffd5b919050565b80358015158114611b70575f5ffd5b5f6101408284031215611b95575f5ffd5b611b9d611a7a565b823581529050602082013567ffffffffffffffff811115611bbc575f5ffd5b611bc884828501611aa4565b602083015250604082013567ffffffffffffffff811115611be7575f5ffd5b611bf384828501611aa4565b604083015250611c0560608301611b4d565b6060820152611c1660808301611b4d565b6080820152611c2760a08301611b4d565b60a082015260c0828101359082015260e08083013590820152611c4d6101008301611b75565b610100820152611c606101208301611b75565b61012082015292915050565b5f60e08284031215611c7c575f5ffd5b50919050565b5f5f6101008385031215611c94575f5ffd5b823567ffffffffffffffff811115611caa575f5ffd5b611cb685828601611b84565b925050611cc68460208501611c6c565b90509250929050565b5f5f5f5f6101208587031215611ce3575f5ffd5b843567ffffffffffffffff811115611cf9575f5ffd5b611d0587828801611b84565b945050602085013567ffffffffffffffff811115611d21575f5ffd5b8501601f81018713611d31575f5ffd5b803567ffffffffffffffff811115611d47575f5ffd5b8760208260051b8401011115611d5b575f5ffd5b60209190910193509150611d728660408701611c6c565b905092959194509250565b5f60208284031215611d8d575f5ffd5b81356fffffffffffffffffffffffffffffffff81168114611dac575f5ffd5b9392505050565b5f60208284031215611dc3575f5ffd5b611dac82611b4d565b81810381811115610e6f577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112611e63575f5ffd5b9190910192915050565b5f60208284031215611e7d575f5ffd5b813563ffffffff81168114611dac575f5ffd5b5f6101208201905063ffffffff835116825263ffffffff60208401511660208301526040830151611ed9604084018273ffffffffffffffffffffffffffffffffffffffff169052565b50606083015160608301526080830151611f0760808401826fffffffffffffffffffffffffffffffff169052565b5060a0830151611f2b60a08401826fffffffffffffffffffffffffffffffff169052565b5060c083015160c083015260e083015160e0830152610100830151611f6961010084018273ffffffffffffffffffffffffffffffffffffffff169052565b5092915050565b5f60208284031215611f80575f5ffd5b5051919050565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b60208152815160208201525f60208301516101406040840152611ffa610160840182611f87565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08483030160608501526120358282611f87565b915050606084015161205f608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e08401516101008401526101008401516120ce61012085018215159052565b50610120840151801515610140850152509392505050565b5f602082840312156120f6575f5ffd5b611dac82611b75565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112612132575f5ffd5b83018035915067ffffffffffffffff82111561214c575f5ffd5b602001915036819003821315612160575f5ffd5b9250929050565b5f5f85851115612175575f5ffd5b83861115612181575f5ffd5b5050820193919092039150565b80357fffffffff000000000000000000000000000000000000000000000000000000008116906004841015611f69577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505092915050565b818382375f910190815291905056fea264697066735822122081ae90ec4fda2a21064974465cfb348392088af4f29c4a3acd8a09ab1bbd399b64736f6c634300081d0033";
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
