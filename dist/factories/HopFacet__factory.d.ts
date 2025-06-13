import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { HopFacet, HopFacetInterface } from "../HopFacet";
declare type HopFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class HopFacet__factory extends ContractFactory {
    constructor(...args: HopFacetConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<HopFacet>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): HopFacet;
    connect(signer: Signer): HopFacet__factory;
    static readonly bytecode = "0x6080604052348015600e575f5ffd5b506121478061001c5f395ff3fe60806040526004361061003e575f3560e01c80633961d1ed1461004257806367fdd71e14610063578063a01fe78414610082578063b3b6358714610095575b5f5ffd5b34801561004d575f5ffd5b5061006161005c366004611982565b6100a8565b005b34801561006e575f5ffd5b5061006161007d3660046119b3565b6101a8565b610061610090366004611c32565b610343565b6100616100a3366004611ce0565b610575565b6100b0610795565b7f6d21be7f069eba22e6227bbf0972cf4a3ee2f0ce81ad8bd8004228e83b4830b873ffffffffffffffffffffffffffffffffffffffff821661011e576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8381165f818152602084815260409182902080547fffffffffffffffffffffffff0000000000000000000000000000000000000000169487169485179055905192835290917fcf56a25ddc5c325bc2d2557f7eee90d061f2e19b7294a6ef738f86f2c3d9280c910160405180910390a2505050565b6101b0610795565b7f6d21be7f069eba22e6227bbf0972cf4a3ee2f0ce81ad8bd8004228e83b4830b85f5b82811015610304575f8484838181106101ee576101ee611d24565b90506040020160200160208101906102069190611d51565b73ffffffffffffffffffffffffffffffffffffffff1603610253576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b83838281811061026557610265611d24565b905060400201602001602081019061027d9190611d51565b825f86868581811061029157610291611d24565b6102a79260206040909202019081019150611d51565b73ffffffffffffffffffffffffffffffffffffffff908116825260208201929092526040015f2080547fffffffffffffffffffffffff000000000000000000000000000000000000000016929091169190911790556001016101d3565b507f5910f57b2fdae9f2f45a1d913c63f55985d0f77d120de8aab63e686ff670dde38383604051610336929190611d71565b60405180910390a1505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016103be576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6103ce3447611e1c565b90508680610100015161040d576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b878061012001511561044b576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8861046e8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156104a5576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036104e2576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361051f576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6105388a5f01518b60c001518b8b338c60e0013561080a565b60c08b01526105478a88610980565b504791505081811115610568576105685f846105638585611e1c565b610c37565b50505f9091555050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016105f0576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6106003447611e1c565b90508480610100015115610640576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b858061012001511561067e576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b866106a18160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156106d8576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f03610715576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610752576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61076488608001518960c00151610c6c565b61076e8888610980565b50479150508181111561078a5761078a5f846105638585611e1c565b50505f909155505050565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c6004015473ffffffffffffffffffffffffffffffffffffffff163314610808576040517f277d76f800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b5f83808203610845576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f8686610853600185611e1c565b81811061086257610862611d24565b90506020028101906108749190611e2f565b610885906080810190606001611d51565b90505f61089182610d20565b905073ffffffffffffffffffffffffffffffffffffffff82166108bb576108b83482611e1c565b90505b5f6108c68989610d6a565b90506108d28989610e74565b6108dd8b8a8a610ee0565b5f826108e885610d20565b6108f29190611e1c565b905073ffffffffffffffffffffffffffffffffffffffff841661091c576109198782611e1c565b90505b8a811015610964576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018c90526024810182905260440160405180910390fd5b6109718a8a8a858b61108b565b9b9a5050505050505050505050565b608082015173ffffffffffffffffffffffffffffffffffffffff8082165f8181527f6d21be7f069eba22e6227bbf0972cf4a3ee2f0ce81ad8bd8004228e83b4830b8602081905260409091205490921690156109e5576109e583828760c001516112ad565b5f73ffffffffffffffffffffffffffffffffffffffff841615610a0c578460e00135610a1f565b60c0860151610a1f9060e0870135611e6b565b90504660011480610a305750466005145b15610b2a578173ffffffffffffffffffffffffffffffffffffffff1663deace8f5828860e001518960a001518a60c001518a606001358b608001358c60a0016020810190610a7e9190611d51565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e08a901b168152600481019690965273ffffffffffffffffffffffffffffffffffffffff94851660248701526044860193909352606485019190915260848401521660a482015260c089013560c482015260e4015f604051808303818588803b158015610b0e575f5ffd5b505af1158015610b20573d5f5f3e3d5ffd5b5050505050610bf8565b60e086015160a087015160c0880151604080517feea0d7b2000000000000000000000000000000000000000000000000000000008152600481019490945273ffffffffffffffffffffffffffffffffffffffff92831660248501526044840191909152873560648401526020880135608484015287013560a4830152606087013560c4830152608087013560e483015283169063eea0d7b2908390610104015f604051808303818588803b158015610be0575f5ffd5b505af1158015610bf2573d5f5f3e3d5ffd5b50505050505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f186604051610c279190611eca565b60405180910390a1505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316610c6157610c5c82826112d9565b505050565b610c5c838383611346565b805f03610ca5576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610cfe5780341015610cfa576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b610cfa73ffffffffffffffffffffffffffffffffffffffff83163330846113b4565b5f73ffffffffffffffffffffffffffffffffffffffff821615610d6257610d5d73ffffffffffffffffffffffffffffffffffffffff83163061140c565b610d64565b475b92915050565b6060815f8167ffffffffffffffff811115610d8757610d87611a24565b604051908082528060200260200182016040528015610db0578160200160208202803683370190505b5090505f805b83811015610e6957868682818110610dd057610dd0611d24565b9050602002810190610de29190611e2f565b610df3906080810190606001611d51565b9150610dfe82610d20565b838281518110610e1057610e10611d24565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610e615734838281518110610e4957610e49611d24565b60200260200101818151610e5d9190611e1c565b9052505b600101610db6565b509095945050505050565b5f5b81811015610c5c5736838383818110610e9157610e91611d24565b9050602002810190610ea39190611e2f565b9050610eb560e0820160c08301611fdd565b15610ed757610ed7610ecd6060830160408401611d51565b8260800135610c6c565b50600101610e76565b805f5b818110156110845736848483818110610efe57610efe611d24565b9050602002810190610f109190611e2f565b9050610f3f610f256060830160408401611d51565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610fa15750610fa1610f586040830160208401611d51565b73ffffffffffffffffffffffffffffffffffffffff165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610fb85750610fb8610f586020830183611d51565b801561103b575061103b610fcf60a0830183611ff6565b610fdd916004915f9161205e565b610fe691612085565b7fffffffff00000000000000000000000000000000000000000000000000000000165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b611071576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61107b868261143f565b50600101610ee3565b5050505050565b835f868261109a600182611e1c565b8181106110a9576110a9611d24565b90506020028101906110bb9190611e2f565b6110cc906080810190606001611d51565b9050816001146111d1575f805b6110e4600185611e1c565b8110156111ce575f8989838181106110fe576110fe611d24565b90506020028101906111109190611e2f565b611121906080810190606001611d51565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146111c55786828151811061116857611168611d24565b602002602001015161117982610d20565b6111839190611e1c565b92505f73ffffffffffffffffffffffffffffffffffffffff8216156111a8575f6111aa565b865b9050808411156111c3576111c3828a6105638488611e1c565b505b506001016110d9565b50505b5f5b828110156112a3575f8888838181106111ee576111ee611d24565b90506020028101906112009190611e2f565b611211906060810190604001611d51565b90505f61121d82610d20565b90505f73ffffffffffffffffffffffffffffffffffffffff831615611242575f611244565b865b9050808211801561128157508473ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614155b1561129557611295838a6105638486611e1c565b8360010193505050506111d3565b5050505050505050565b610c5c8383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6116af565b73ffffffffffffffffffffffffffffffffffffffff8216611326576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610cfa73ffffffffffffffffffffffffffffffffffffffff8316826117dc565b73ffffffffffffffffffffffffffffffffffffffff8216611393576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610c5c73ffffffffffffffffffffffffffffffffffffffff841683836117f5565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f511417166113ff57637939f4245f526004601cfd5b5f60605260405250505050565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b61145461144f6020830183611d51565b61183e565b61148a576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f8190036114c9576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6114dd610f256060850160408601611d51565b6114e7575f6114ed565b82608001355b90505f6115086115036080860160608701611d51565b610d20565b9050815f0361153e5761153e6115246060860160408701611d51565b6115346040870160208801611d51565b86608001356112ad565b5f8061154d6020870187611d51565b73ffffffffffffffffffffffffffffffffffffffff168461157160a0890189611ff6565b60405161157f9291906120eb565b5f6040518083038185875af1925050503d805f81146115b9576040519150601f19603f3d011682016040523d82523d5f602084013e6115be565b606091505b5091509150816115d1576115d1816118d2565b5f6115e56115036080890160608a01611d51565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388861161660208a018a611d51565b61162660608b0160408c01611d51565b61163660808c0160608d01611d51565b8b608001358987116116485786611652565b6116528a88611e1c565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8416156117d65773ffffffffffffffffffffffffffffffffffffffff8316611718576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa15801561178b573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906117af91906120fa565b10156117d6576117d673ffffffffffffffffffffffffffffffffffffffff851684836118dc565b50505050565b5f385f3884865af1610cfa5763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f51141716611835576390b8ec185f526004601cfd5b5f603452505050565b6040805160178082528183019092525f9182919060208201818036833701905050905060175f60208301853c60208101517f10ff0000000000000000000000000000000000000000000000000000000000007fffffff00000000000000000000000000000000000000000000000000000000008216016118c957506023015160601c3b151592915050565b5050503b151590565b8051602082018181fd5b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f51141716611835575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f5114171661183557633e3f8f735f526004601cfd5b803573ffffffffffffffffffffffffffffffffffffffff8116811461197d575f5ffd5b919050565b5f5f60408385031215611993575f5ffd5b61199c8361195a565b91506119aa6020840161195a565b90509250929050565b5f5f602083850312156119c4575f5ffd5b823567ffffffffffffffff8111156119da575f5ffd5b8301601f810185136119ea575f5ffd5b803567ffffffffffffffff811115611a00575f5ffd5b8560208260061b8401011115611a14575f5ffd5b6020919091019590945092505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff81118282101715611a7557611a75611a24565b60405290565b5f82601f830112611a8a575f5ffd5b813567ffffffffffffffff811115611aa457611aa4611a24565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810167ffffffffffffffff81118282101715611af157611af1611a24565b604052818152838201602001851015611b08575f5ffd5b816020850160208301375f918101602001919091529392505050565b8035801515811461197d575f5ffd5b5f6101408284031215611b44575f5ffd5b611b4c611a51565b823581529050602082013567ffffffffffffffff811115611b6b575f5ffd5b611b7784828501611a7b565b602083015250604082013567ffffffffffffffff811115611b96575f5ffd5b611ba284828501611a7b565b604083015250611bb46060830161195a565b6060820152611bc56080830161195a565b6080820152611bd660a0830161195a565b60a082015260c0828101359082015260e08083013590820152611bfc6101008301611b24565b610100820152611c0f6101208301611b24565b61012082015292915050565b5f6101008284031215611c2c575f5ffd5b50919050565b5f5f5f5f6101408587031215611c46575f5ffd5b843567ffffffffffffffff811115611c5c575f5ffd5b611c6887828801611b33565b945050602085013567ffffffffffffffff811115611c84575f5ffd5b8501601f81018713611c94575f5ffd5b803567ffffffffffffffff811115611caa575f5ffd5b8760208260051b8401011115611cbe575f5ffd5b60209190910193509150611cd58660408701611c1b565b905092959194509250565b5f5f6101208385031215611cf2575f5ffd5b823567ffffffffffffffff811115611d08575f5ffd5b611d1485828601611b33565b9250506119aa8460208501611c1b565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f60208284031215611d61575f5ffd5b611d6a8261195a565b9392505050565b602080825281018290525f8360408301825b85811015611de55773ffffffffffffffffffffffffffffffffffffffff611da98461195a565b16825273ffffffffffffffffffffffffffffffffffffffff611dcd6020850161195a565b16602083015260409283019290910190600101611d83565b5095945050505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b81810381811115610d6457610d64611def565b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112611e61575f5ffd5b9190910192915050565b80820180821115610d6457610d64611def565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b60208152815160208201525f60208301516101406040840152611ef1610160840182611e7e565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0848303016060850152611f2c8282611e7e565b9150506060840151611f56608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e0840151610100840152610100840151611fc561012085018215159052565b50610120840151801515610140850152509392505050565b5f60208284031215611fed575f5ffd5b611d6a82611b24565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112612029575f5ffd5b83018035915067ffffffffffffffff821115612043575f5ffd5b602001915036819003821315612057575f5ffd5b9250929050565b5f5f8585111561206c575f5ffd5b83861115612078575f5ffd5b5050820193919092039150565b80357fffffffff0000000000000000000000000000000000000000000000000000000081169060048410156120e4577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b818382375f9101908152919050565b5f6020828403121561210a575f5ffd5b505191905056fea264697066735822122097b514f75161b0251d32fa28b3bebe7ec51c4bc1a3e46fe1f0372c33d3d762df64736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "initHop";
        readonly inputs: readonly [{
            readonly name: "configs";
            readonly type: "tuple[]";
            readonly internalType: "struct HopFacet.Config[]";
            readonly components: readonly [{
                readonly name: "assetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "bridge";
                readonly type: "address";
                readonly internalType: "address";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "registerBridge";
        readonly inputs: readonly [{
            readonly name: "assetId";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "bridge";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaHop";
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
            readonly name: "_hopData";
            readonly type: "tuple";
            readonly internalType: "struct HopFacet.HopData";
            readonly components: readonly [{
                readonly name: "bonderFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "amountOutMin";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "deadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationAmountOutMin";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationDeadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "relayer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "relayerFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "nativeFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaHop";
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
            readonly name: "_hopData";
            readonly type: "tuple";
            readonly internalType: "struct HopFacet.HopData";
            readonly components: readonly [{
                readonly name: "bonderFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "amountOutMin";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "deadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationAmountOutMin";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationDeadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "relayer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "relayerFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "nativeFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
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
        readonly name: "HopBridgeRegistered";
        readonly inputs: readonly [{
            readonly name: "assetId";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "bridge";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "HopInitialized";
        readonly inputs: readonly [{
            readonly name: "configs";
            readonly type: "tuple[]";
            readonly indexed: false;
            readonly internalType: "struct HopFacet.Config[]";
            readonly components: readonly [{
                readonly name: "assetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "bridge";
                readonly type: "address";
                readonly internalType: "address";
            }];
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
        readonly name: "InvalidConfig";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidContract";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidReceiver";
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
        readonly name: "OnlyContractOwner";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "ReentrancyError";
        readonly inputs: readonly [];
    }];
    static createInterface(): HopFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): HopFacet;
}
export {};
