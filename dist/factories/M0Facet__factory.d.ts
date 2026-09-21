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
    static readonly bytecode = "0x60a060405234801561000f575f5ffd5b5060405161227038038061227083398101604081905261002e91610066565b6001600160a01b038116610055576040516306b7c75960e31b815260040160405180910390fd5b6001600160a01b0316608052610093565b5f60208284031215610076575f5ffd5b81516001600160a01b038116811461008c575f5ffd5b9392505050565b6080516121b86100b85f395f8181607c0152818161091e015261094901526121b85ff3fe608060405260043610610033575f3560e01c806365782c4b14610037578063b9eaf86d14610058578063ca72c3411461006b575b5f5ffd5b348015610042575f5ffd5b50610056610051366004611c02565b6100c7565b005b610056610066366004611c4f565b6102ee565b348015610076575f5ffd5b5061009e7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610142576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815560a0830151839073ffffffffffffffffffffffffffffffffffffffff16610199576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036101d6576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8380610100015115610214576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8480610120015115610252576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b85610275816080015173ffffffffffffffffffffffffffffffffffffffff161590565b156102ac576040517f5ded599700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102b68787610692565b6102c887608001518860c00151610864565b6102e287876102dd60c0820160a08301611cfd565b610914565b50505f90925550505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610369576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815561037d6040830160208401611d33565b5f6103883447611d4c565b9050866103ad8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156103e4576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f03610421576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8780610100015161045e576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b888061012001511561049c576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b896104bf816080015173ffffffffffffffffffffffffffffffffffffffff161590565b156104f6576040517f5ded599700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6105008b89610692565b881580159061057d575060808b015173ffffffffffffffffffffffffffffffffffffffff168a8a610532600182611d4c565b81811061054157610541611d84565b90506020028101906105539190611db1565b610564906080810190606001611d33565b73ffffffffffffffffffffffffffffffffffffffff1614155b156105b4576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f8b60c0015190505f6105df8d5f0151838e8e8e60200160208101906105da9190611d33565b610b87565b90505f61060e6105f560c08d0160a08e01611cfd565b6fffffffffffffffffffffffffffffffff168385610cc9565b9050805f03610649576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60c08e0182905261065e8e8c6102dd84610cee565b505050505050505f47905081811115610685576106855f846106808585611d4c565b610d13565b50505f9091555050505050565b5f6106a36040830160208401611d33565b73ffffffffffffffffffffffffffffffffffffffff16036106f0576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6107016060830160408401611d33565b73ffffffffffffffffffffffffffffffffffffffff160361074e576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6060810135610789576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b7311f111f111f111f111f111f111f111f111f111f173ffffffffffffffffffffffffffffffffffffffff168260a0015173ffffffffffffffffffffffffffffffffffffffff160361081057803561080c576040517f58b0510000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b60a082015173ffffffffffffffffffffffffffffffffffffffff1681351461080c576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b805f0361089d576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166108f2578034101561080c576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61080c73ffffffffffffffffffffffffffffffffffffffff8316333084610d48565b61094783608001517f00000000000000000000000000000000000000000000000000000000000000008560c00151610da0565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16633c48b0a260405180610120016040528061099c8760e00151610dcc565b63ffffffff1681526020016109b760e0870160c08801611ded565b63ffffffff168152602001866080015173ffffffffffffffffffffffffffffffffffffffff168152602001856060013581526020016109f98760c00151610cee565b6fffffffffffffffffffffffffffffffff168152602001846fffffffffffffffffffffffffffffffff168152602001855f0135815260200185608001358152602001856040016020810190610a4e9190611d33565b73ffffffffffffffffffffffffffffffffffffffff168152506040518263ffffffff1660e01b8152600401610a839190611e10565b6020604051808303815f875af1158015610a9f573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610ac39190611ef0565b507311f111f111f111f111f111f111f111f111f111f173ffffffffffffffffffffffffffffffffffffffff168360a0015173ffffffffffffffffffffffffffffffffffffffff1603610b4b5760e08301518351604051843581527f815cd8dc72093a13fe3577112c391b6279303956526382ab98772d0239dbf78c9060200160405180910390a35b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f183604051610b7a9190611f53565b60405180910390a1505050565b5f82808203610bc2576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f8585610bd0600185611d4c565b818110610bdf57610bdf611d84565b9050602002810190610bf19190611db1565b610c02906080810190606001611d33565b90505f610c0e82610df5565b905073ffffffffffffffffffffffffffffffffffffffff8216610c3857610c353482611d4c565b90505b5f610c438888610e3e565b9050610c4f8888610f48565b610c5c8a89898985610fb4565b5f82610c6785610df5565b610c719190611d4c565b905089811015610cbb576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b90526024810182905260440160405180910390fd5b9a9950505050505050505050565b82820283158482048414178202610ce75763ad251c275f526004601cfd5b0492915050565b5f7001000000000000000000000000000000008210610d0f57610d0f6111fc565b5090565b73ffffffffffffffffffffffffffffffffffffffff8316610d3d57610d388282611209565b505050565b610d38838383611276565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f51141716610d9357637939f4245f526004601cfd5b5f60605260405250505050565b610d388383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6112e4565b5f660416edef1601be8203610de6575063536f6c4d919050565b610def82611411565b92915050565b5f73ffffffffffffffffffffffffffffffffffffffff821615610e3757610e3273ffffffffffffffffffffffffffffffffffffffff831630611426565b610def565b4792915050565b6060815f8167ffffffffffffffff811115610e5b57610e5b6119cd565b604051908082528060200260200182016040528015610e84578160200160208202803683370190505b5090505f5f5b83811015610f3d57868682818110610ea457610ea4611d84565b9050602002810190610eb69190611db1565b610ec7906080810190606001611d33565b9150610ed282610df5565b838281518110610ee457610ee4611d84565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610f355734838281518110610f1d57610f1d611d84565b60200260200101818151610f319190611d4c565b9052505b600101610e8a565b509095945050505050565b5f5b81811015610d385736838383818110610f6557610f65611d84565b9050602002810190610f779190611db1565b9050610f8960e0820160c08301612066565b15610fab57610fab610fa16060830160408401611d33565b8260800135610864565b50600101610f4a565b83838383825f80805b838110156111e057368c8c83818110610fd857610fd8611d84565b9050602002810190610fea9190611db1565b9050610ff96020820182611d33565b935061100b6040820160208301611d33565b92506110ae8461101e60a084018461207f565b61102c916004915f916120e7565b6110359161210e565b73ffffffffffffffffffffffffffffffffffffffff919091165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f24602090815260408083207fffffffff000000000000000000000000000000000000000000000000000000009094168352929052205460ff1690565b158061119657506110e26110c86060830160408401611d33565b73ffffffffffffffffffffffffffffffffffffffff161590565b15801561111b57508373ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614155b8015611196575073ffffffffffffffffffffffffffffffffffffffff83165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f24602090815260408083207fffffffff00000000000000000000000000000000000000000000000000000000845290915290205460ff16155b156111cd576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6111d78e82611459565b50600101610fbd565b505050506111f1848484845f6116cc565b505050505050505050565b6335278d125f526004601cfd5b73ffffffffffffffffffffffffffffffffffffffff8216611256576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61080c73ffffffffffffffffffffffffffffffffffffffff8316826118e3565b73ffffffffffffffffffffffffffffffffffffffff82166112c3576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610d3873ffffffffffffffffffffffffffffffffffffffff841683836118fc565b73ffffffffffffffffffffffffffffffffffffffff84161561140b5773ffffffffffffffffffffffffffffffffffffffff831661134d576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa1580156113c0573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906113e49190611ef0565b101561140b5761140b73ffffffffffffffffffffffffffffffffffffffff85168483611945565b50505050565b5f6401000000008210610d0f57610d0f6111fc565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b6114716114696020830183611d33565b6017903b1190565b6114a7576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f8190036114e6576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6114fa6110c86060850160408601611d33565b611504575f61150a565b82608001355b90505f6115256115206080860160608701611d33565b610df5565b9050815f0361155b5761155b6115416060860160408701611d33565b6115516040870160208801611d33565b8660800135610da0565b5f8061156a6020870187611d33565b73ffffffffffffffffffffffffffffffffffffffff168461158e60a089018961207f565b60405161159c929190612173565b5f6040518083038185875af1925050503d805f81146115d6576040519150601f19603f3d011682016040523d82523d5f602084013e6115db565b606091505b5091509150816115ee576115ee816119c3565b5f6116026115206080890160608a01611d33565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388861163360208a018a611d33565b61164360608b0160408c01611d33565b61165360808c0160608d01611d33565b8b60800135898711611665578661166f565b61166f8a88611d4c565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b835f86826116db600182611d4c565b8181106116ea576116ea611d84565b90506020028101906116fc9190611db1565b61170d906080810190606001611d33565b90505f5f5f5f5f5f5f5b888110156118d35761172a60018a611d4c565b81108015611739575088600114155b15611814578d8d8281811061175057611750611d84565b90506020028101906117629190611db1565b611773906080810190606001611d33565b95508773ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff1614611814578a81815181106117ba576117ba611d84565b60200260200101516117cb87610df5565b6117d59190611d4c565b965073ffffffffffffffffffffffffffffffffffffffff8616156117f9575f6117fb565b895b93508387111561181457611814868d610680878b611d4c565b8d8d8281811061182657611826611d84565b90506020028101906118389190611db1565b611849906060810190604001611d33565b945061185485610df5565b925073ffffffffffffffffffffffffffffffffffffffff851615611878575f61187a565b895b915081831180156118b757508773ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614155b156118cb576118cb858d6106808587611d4c565b600101611717565b5050505050505050505050505050565b5f385f3884865af161080c5763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f5114171661193c576390b8ec185f526004601cfd5b5f603452505050565b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f5114171661193c575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f5114171661193c57633e3f8f735f526004601cfd5b8051602082018181fd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff81118282101715611a1e57611a1e6119cd565b60405290565b5f82601f830112611a33575f5ffd5b813567ffffffffffffffff811115611a4d57611a4d6119cd565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810167ffffffffffffffff81118282101715611a9a57611a9a6119cd565b604052818152838201602001851015611ab1575f5ffd5b816020850160208301375f918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff81168114611af0575f5ffd5b919050565b80358015158114611af0575f5ffd5b5f6101408284031215611b15575f5ffd5b611b1d6119fa565b823581529050602082013567ffffffffffffffff811115611b3c575f5ffd5b611b4884828501611a24565b602083015250604082013567ffffffffffffffff811115611b67575f5ffd5b611b7384828501611a24565b604083015250611b8560608301611acd565b6060820152611b9660808301611acd565b6080820152611ba760a08301611acd565b60a082015260c0828101359082015260e08083013590820152611bcd6101008301611af5565b610100820152611be06101208301611af5565b61012082015292915050565b5f60e08284031215611bfc575f5ffd5b50919050565b5f5f6101008385031215611c14575f5ffd5b823567ffffffffffffffff811115611c2a575f5ffd5b611c3685828601611b04565b925050611c468460208501611bec565b90509250929050565b5f5f5f5f6101208587031215611c63575f5ffd5b843567ffffffffffffffff811115611c79575f5ffd5b611c8587828801611b04565b945050602085013567ffffffffffffffff811115611ca1575f5ffd5b8501601f81018713611cb1575f5ffd5b803567ffffffffffffffff811115611cc7575f5ffd5b8760208260051b8401011115611cdb575f5ffd5b60209190910193509150611cf28660408701611bec565b905092959194509250565b5f60208284031215611d0d575f5ffd5b81356fffffffffffffffffffffffffffffffff81168114611d2c575f5ffd5b9392505050565b5f60208284031215611d43575f5ffd5b611d2c82611acd565b81810381811115610def577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112611de3575f5ffd5b9190910192915050565b5f60208284031215611dfd575f5ffd5b813563ffffffff81168114611d2c575f5ffd5b5f6101208201905063ffffffff835116825263ffffffff60208401511660208301526040830151611e59604084018273ffffffffffffffffffffffffffffffffffffffff169052565b50606083015160608301526080830151611e8760808401826fffffffffffffffffffffffffffffffff169052565b5060a0830151611eab60a08401826fffffffffffffffffffffffffffffffff169052565b5060c083015160c083015260e083015160e0830152610100830151611ee961010084018273ffffffffffffffffffffffffffffffffffffffff169052565b5092915050565b5f60208284031215611f00575f5ffd5b5051919050565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b60208152815160208201525f60208301516101406040840152611f7a610160840182611f07565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0848303016060850152611fb58282611f07565b9150506060840151611fdf608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e084015161010084015261010084015161204e61012085018215159052565b50610120840151801515610140850152509392505050565b5f60208284031215612076575f5ffd5b611d2c82611af5565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126120b2575f5ffd5b83018035915067ffffffffffffffff8211156120cc575f5ffd5b6020019150368190038213156120e0575f5ffd5b9250929050565b5f5f858511156120f5575f5ffd5b83861115612101575f5ffd5b5050820193919092039150565b80357fffffffff000000000000000000000000000000000000000000000000000000008116906004841015611ee9577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505092915050565b818382375f910190815291905056fea264697066735822122076801a00e921a645f2c021b448b45df1ec95369f0e72130965054d5092af04d664736f6c634300081d0033";
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
