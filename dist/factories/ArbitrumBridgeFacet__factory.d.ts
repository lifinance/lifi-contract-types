import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { ArbitrumBridgeFacet, ArbitrumBridgeFacetInterface } from "../ArbitrumBridgeFacet";
type ArbitrumBridgeFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ArbitrumBridgeFacet__factory extends ContractFactory {
    constructor(...args: ArbitrumBridgeFacetConstructorParams);
    deploy(_gatewayRouter: PromiseOrValue<string>, _inbox: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ArbitrumBridgeFacet>;
    getDeployTransaction(_gatewayRouter: PromiseOrValue<string>, _inbox: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): ArbitrumBridgeFacet;
    connect(signer: Signer): ArbitrumBridgeFacet__factory;
    static readonly bytecode = "0x60c060405234801561000f575f5ffd5b50604051611f6b380380611f6b83398101604081905261002e91610060565b6001600160a01b039182166080521660a052610091565b80516001600160a01b038116811461005b575f5ffd5b919050565b5f5f60408385031215610071575f5ffd5b61007a83610045565b915061008860208401610045565b90509250929050565b60805160a051611eb26100b95f395f6106a101525f818161081a01526108910152611eb25ff3fe608060405260043610610028575f3560e01c80633cc9517b1461002c578063c9851d0b14610041575b5f5ffd5b61003f61003a366004611903565b610054565b005b61003f61004f3660046119b0565b6102a4565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100cf576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6100df3447611a29565b90508680610100015161011e576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b878061012001511561015c576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8861017f8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156101b6576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036101f3576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610230576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f610243604089013560208a0135611a3c565b61024e908935611a53565b90506102658b5f01518c60c001518c8c33866104e6565b60c08c01526102758b8983610680565b50479250505081811115610297576102975f846102928585611a29565b6109d8565b50505f9091555050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0161031f576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f61032f3447611a29565b9050848061010001511561036f576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b85806101200151156103ad576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b866103d08160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610407576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f03610444576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610481576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f610494604089013560208a0135611a3c565b61049f908935611a53565b90506104b389608001518a60c00151610a0d565b6104be898983610680565b504792505050818111156104db576104db5f846102928585611a29565b50505f909155505050565b5f83808203610521576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f868661052f600185611a29565b81811061053e5761053e611a66565b90506020028101906105509190611a93565b610561906080810190606001611acf565b90505f61056d82610ac1565b905073ffffffffffffffffffffffffffffffffffffffff8216610597576105943482611a29565b90505b5f6105a28989610b0b565b90506105ae8989610c15565b604080516060810182528c815273ffffffffffffffffffffffffffffffffffffffff891660208201529081018790526105e9818b8b85610c81565b5f836105f486610ac1565b6105fe9190611a29565b905073ffffffffffffffffffffffffffffffffffffffff8516610628576106258882611a29565b90505b8b811015610670576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018d90526024810182905260440160405180910390fd5b9c9b505050505050505050505050565b608083015173ffffffffffffffffffffffffffffffffffffffff166107cb577f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16636e6e8a6a828560c001516106eb9190611a53565b60a086015160c08701516040805160e086901b7fffffffff0000000000000000000000000000000000000000000000000000000016815273ffffffffffffffffffffffffffffffffffffffff90931660048401819052602484019290925287356044840152606483018290526084830191909152602087013560a483015286013560c482015261010060e48201525f6101048201526101240160206040518083038185885af11580156107a0573d5f5f3e3d5ffd5b50505050506040513d601f19601f820116820180604052508101906107c59190611af1565b5061099c565b60808301516040517fbda009fe00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff808316600483015261088f92917f00000000000000000000000000000000000000000000000000000000000000009091169063bda009fe90602401602060405180830381865afa158015610861573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906108859190611b08565b8560c00151611069565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663d2ce7d658285608001518660a001518760c0015187602001358860400135895f01356040516020016109099181526040602082018190525f9082015260600190565b6040516020818303038152906040526040518863ffffffff1660e01b815260040161093996959493929190611b6f565b5f6040518083038185885af1158015610954573d5f5f3e3d5ffd5b50505050506040513d5f823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820160405261099a9190810190611bd7565b505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1836040516109cb9190611c4c565b60405180910390a1505050565b73ffffffffffffffffffffffffffffffffffffffff8316610a02576109fd8282611095565b505050565b6109fd838383611102565b805f03610a46576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610a9f5780341015610a9b576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b610a9b73ffffffffffffffffffffffffffffffffffffffff8316333084611170565b5f73ffffffffffffffffffffffffffffffffffffffff821615610b0357610afe73ffffffffffffffffffffffffffffffffffffffff8316306111c8565b610b05565b475b92915050565b6060815f8167ffffffffffffffff811115610b2857610b28611685565b604051908082528060200260200182016040528015610b51578160200160208202803683370190505b5090505f805b83811015610c0a57868682818110610b7157610b71611a66565b9050602002810190610b839190611a93565b610b94906080810190606001611acf565b9150610b9f82610ac1565b838281518110610bb157610bb1611a66565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610c025734838281518110610bea57610bea611a66565b60200260200101818151610bfe9190611a29565b9052505b600101610b57565b509095945050505050565b5f5b818110156109fd5736838383818110610c3257610c32611a66565b9050602002810190610c449190611a93565b9050610c5660e0820160c08301611d5f565b15610c7857610c78610c6e6060830160408401611acf565b8260800135610a0d565b50600101610c17565b602084015160408501518491849184908360018114610f83575f8686610ca8600185611a29565b818110610cb757610cb7611a66565b9050602002810190610cc99190611a93565b610cda906080810190606001611acf565b90505f89815b81811015610e8357368d8d83818110610cfb57610cfb611a66565b9050602002810190610d0d9190611a93565b9050610d3c610d226060830160408401611acf565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610d9e5750610d9e610d556040830160208401611acf565b73ffffffffffffffffffffffffffffffffffffffff165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610db55750610db5610d556020830183611acf565b8015610e385750610e38610dcc60a0830183611d78565b610dda916004915f91611de0565b610de391611e07565b7fffffffff00000000000000000000000000000000000000000000000000000000165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610e6e576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8e51610e7a90826111fb565b50600101610ce0565b505f90505b610e93600185611a29565b811015610f7b575f898983818110610ead57610ead611a66565b9050602002810190610ebf9190611a93565b610ed0906080810190606001611acf565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610f7257868281518110610f1757610f17611a66565b6020026020010151610f2882610ac1565b610f329190611a29565b92505f73ffffffffffffffffffffffffffffffffffffffff821615610f57575f610f59565b865b90508315610f7057610f70828a6102928488611a29565b505b50600101610e88565b50505061105d565b875f5b8181101561105a57368b8b83818110610fa157610fa1611a66565b9050602002810190610fb39190611a93565b9050610fc8610d226060830160408401611acf565b80610fe15750610fe1610d556040830160208401611acf565b8015610ff85750610ff8610d556020830183611acf565b801561100f575061100f610dcc60a0830183611d78565b611045576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8c5161105190826111fb565b50600101610f86565b50505b50505050505050505050565b6109fd8383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff61146e565b73ffffffffffffffffffffffffffffffffffffffff82166110e2576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610a9b73ffffffffffffffffffffffffffffffffffffffff83168261159b565b73ffffffffffffffffffffffffffffffffffffffff821661114f576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6109fd73ffffffffffffffffffffffffffffffffffffffff841683836115b4565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f511417166111bb57637939f4245f526004601cfd5b5f60605260405250505050565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b61121361120b6020830183611acf565b6017903b1190565b611249576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f819003611288576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f61129c610d226060850160408601611acf565b6112a6575f6112ac565b82608001355b90505f6112c76112c26080860160608701611acf565b610ac1565b9050815f036112fd576112fd6112e36060860160408701611acf565b6112f36040870160208801611acf565b8660800135611069565b5f8061130c6020870187611acf565b73ffffffffffffffffffffffffffffffffffffffff168461133060a0890189611d78565b60405161133e929190611e6d565b5f6040518083038185875af1925050503d805f8114611378576040519150601f19603f3d011682016040523d82523d5f602084013e61137d565b606091505b50915091508161139057611390816115fd565b5f6113a46112c26080890160608a01611acf565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b38886113d560208a018a611acf565b6113e560608b0160408c01611acf565b6113f560808c0160608d01611acf565b8b608001358987116114075786611411565b6114118a88611a29565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8416156115955773ffffffffffffffffffffffffffffffffffffffff83166114d7576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa15801561154a573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061156e9190611af1565b10156115955761159573ffffffffffffffffffffffffffffffffffffffff85168483611607565b50505050565b5f385f3884865af1610a9b5763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f511417166115f4576390b8ec185f526004601cfd5b5f603452505050565b8051602082018181fd5b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f511417166115f4575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f511417166115f457633e3f8f735f526004601cfd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff811182821017156116d6576116d6611685565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff8111828210171561172357611723611685565b604052919050565b5f67ffffffffffffffff82111561174457611744611685565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b5f82601f83011261177f575f5ffd5b813561179261178d8261172b565b6116dc565b8181528460208386010111156117a6575f5ffd5b816020850160208301375f918101602001919091529392505050565b73ffffffffffffffffffffffffffffffffffffffff811681146117e3575f5ffd5b50565b80356117f1816117c2565b919050565b803580151581146117f1575f5ffd5b5f6101408284031215611816575f5ffd5b61181e6116b2565b823581529050602082013567ffffffffffffffff81111561183d575f5ffd5b61184984828501611770565b602083015250604082013567ffffffffffffffff811115611868575f5ffd5b61187484828501611770565b604083015250611886606083016117e6565b6060820152611897608083016117e6565b60808201526118a860a083016117e6565b60a082015260c0828101359082015260e080830135908201526118ce61010083016117f6565b6101008201526118e161012083016117f6565b61012082015292915050565b5f606082840312156118fd575f5ffd5b50919050565b5f5f5f5f60a08587031215611916575f5ffd5b843567ffffffffffffffff81111561192c575f5ffd5b61193887828801611805565b945050602085013567ffffffffffffffff811115611954575f5ffd5b8501601f81018713611964575f5ffd5b803567ffffffffffffffff81111561197a575f5ffd5b8760208260051b840101111561198e575f5ffd5b602091909101935091506119a586604087016118ed565b905092959194509250565b5f5f608083850312156119c1575f5ffd5b823567ffffffffffffffff8111156119d7575f5ffd5b6119e385828601611805565b9250506119f384602085016118ed565b90509250929050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b81810381811115610b0557610b056119fc565b8082028115828204841417610b0557610b056119fc565b80820180821115610b0557610b056119fc565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112611ac5575f5ffd5b9190910192915050565b5f60208284031215611adf575f5ffd5b8135611aea816117c2565b9392505050565b5f60208284031215611b01575f5ffd5b5051919050565b5f60208284031215611b18575f5ffd5b8151611aea816117c2565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b73ffffffffffffffffffffffffffffffffffffffff8716815273ffffffffffffffffffffffffffffffffffffffff8616602082015284604082015283606082015282608082015260c060a08201525f611bcb60c0830184611b23565b98975050505050505050565b5f60208284031215611be7575f5ffd5b815167ffffffffffffffff811115611bfd575f5ffd5b8201601f81018413611c0d575f5ffd5b8051611c1b61178d8261172b565b818152856020838501011115611c2f575f5ffd5b8160208401602083015e5f91810160200191909152949350505050565b60208152815160208201525f60208301516101406040840152611c73610160840182611b23565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0848303016060850152611cae8282611b23565b9150506060840151611cd8608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e0840151610100840152610100840151611d4761012085018215159052565b50610120840151801515610140850152509392505050565b5f60208284031215611d6f575f5ffd5b611aea826117f6565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611dab575f5ffd5b83018035915067ffffffffffffffff821115611dc5575f5ffd5b602001915036819003821315611dd9575f5ffd5b9250929050565b5f5f85851115611dee575f5ffd5b83861115611dfa575f5ffd5b5050820193919092039150565b80357fffffffff000000000000000000000000000000000000000000000000000000008116906004841015611e66577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b818382375f910190815291905056fea2646970667358221220efae64e7df3e9898a3085f06d34275b349e4edd8dd3f58289ffbdbc9ded632cd64736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_gatewayRouter";
            readonly type: "address";
            readonly internalType: "contract IGatewayRouter";
        }, {
            readonly name: "_inbox";
            readonly type: "address";
            readonly internalType: "contract IGatewayRouter";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaArbitrumBridge";
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
            readonly name: "_arbitrumData";
            readonly type: "tuple";
            readonly internalType: "struct ArbitrumBridgeFacet.ArbitrumData";
            readonly components: readonly [{
                readonly name: "maxSubmissionCost";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "maxGas";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "maxGasPrice";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaArbitrumBridge";
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
            readonly name: "_arbitrumData";
            readonly type: "tuple";
            readonly internalType: "struct ArbitrumBridgeFacet.ArbitrumData";
            readonly components: readonly [{
                readonly name: "maxSubmissionCost";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "maxGas";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "maxGasPrice";
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
        readonly name: "ReentrancyError";
        readonly inputs: readonly [];
    }];
    static createInterface(): ArbitrumBridgeFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ArbitrumBridgeFacet;
}
export {};
