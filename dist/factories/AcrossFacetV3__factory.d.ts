import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { AcrossFacetV3, AcrossFacetV3Interface } from "../AcrossFacetV3";
declare type AcrossFacetV3ConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class AcrossFacetV3__factory extends ContractFactory {
    constructor(...args: AcrossFacetV3ConstructorParams);
    deploy(_spokePool: PromiseOrValue<string>, _wrappedNative: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<AcrossFacetV3>;
    getDeployTransaction(_spokePool: PromiseOrValue<string>, _wrappedNative: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): AcrossFacetV3;
    connect(signer: Signer): AcrossFacetV3__factory;
    static readonly bytecode = "0x60c06040523480156200001157600080fd5b50604051620020ad380380620020ad833981016040819052620000349162000065565b6001600160a01b039182166080521660a052620000a4565b6001600160a01b03811681146200006257600080fd5b50565b600080604083850312156200007957600080fd5b825162000086816200004c565b602084015190925062000099816200004c565b809150509250929050565b60805160a051611fc9620000e46000396000818160db01526107a9015260008181607e0152818161075e0152818161085f015261088a0152611fc96000f3fe60806040526004361061003f5760003560e01c806328832cbd1461004457806328cc431614610059578063afdac3d61461006c578063eb6d3a11146100c9575b600080fd5b6100576100523660046118f7565b6100fd565b005b6100576100673660046119b6565b61033f565b34801561007857600080fd5b506100a07f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b3480156100d557600080fd5b506100a07f000000000000000000000000000000000000000000000000000000000000000081565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610178576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006101893447611a49565b9050868061010001516101c8576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b876101eb8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610222576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c00151600003610260576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361029d576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102b289600001518a60c001518a8a3361052c565b60c08a015260006102c287611a88565b9050670de0b6b3a76400006102dd60a0890160808a01611b66565b67ffffffffffffffff168b60c001516102f69190611b88565b6103009190611b9f565b606082015261030f8a82610674565b5047915050818111156103315761033160008461032c8585611a49565b610997565b505060009091555050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016103ba576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006103cb3447611a49565b9050846103f08160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610427576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c00151600003610465576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036104a2576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b85806101000151156104e0576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6104f287608001518860c001516109cd565b610504876104ff88611a88565b610674565b50479050818111156105205761052060008461032c8585611a49565b50506000909155505050565b600082808203610568576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008585610577600185611a49565b81811061058657610586611bda565b90506020028101906105989190611c09565b6105a9906080810190606001611c47565b905060006105b682610a82565b905073ffffffffffffffffffffffffffffffffffffffff82166105e0576105dd3482611a49565b90505b60006105ec8888610acd565b90506105f88888610bd9565b6106058a89898985610c46565b60008261061185610a82565b61061b9190611a49565b905089811015610666576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044015b60405180910390fd5b9a9950505050505050505050565b8161012001511515600082610120015151111515146106bf576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8161012001511580156107065750806000015173ffffffffffffffffffffffffffffffffffffffff168260a0015173ffffffffffffffffffffffffffffffffffffffff1614155b1561073d576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608082015173ffffffffffffffffffffffffffffffffffffffff16610855577f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16637b9392328360c00151836020015184600001517f000000000000000000000000000000000000000000000000000000000000000086604001518860c0015188606001518a60e001518a60a001518b60c001518c60e001518d61010001518e61012001516040518e63ffffffff1660e01b815260040161081e9c9b9a99989796959493929190611cc6565b6000604051808303818588803b15801561083757600080fd5b505af115801561084b573d6000803e3d6000fd5b505050505061095c565b61088882608001517f00000000000000000000000000000000000000000000000000000000000000008460c00151610ff8565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16637b93923282602001518360000151856080015185604001518760c0015187606001518960e001518960a001518a60c001518b60e001518c61010001518d61012001516040518d63ffffffff1660e01b81526004016109299c9b9a99989796959493929190611cc6565b600060405180830381600087803b15801561094357600080fd5b505af1158015610957573d6000803e3d6000fd5b505050505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f18260405161098b9190611d5e565b60405180910390a15050565b73ffffffffffffffffffffffffffffffffffffffff8316156109c3576109be838383611024565b505050565b6109be8282611092565b80600003610a07576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610a605780341015610a5c576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b610a5c73ffffffffffffffffffffffffffffffffffffffff83163330846110ff565b600073ffffffffffffffffffffffffffffffffffffffff821615610ac557610ac073ffffffffffffffffffffffffffffffffffffffff83163061115c565b610ac7565b475b92915050565b60608160008167ffffffffffffffff811115610aeb57610aeb6116bc565b604051908082528060200260200182016040528015610b14578160200160208202803683370190505b5090506000805b83811015610bce57868682818110610b3557610b35611bda565b9050602002810190610b479190611c09565b610b58906080810190606001611c47565b9150610b6382610a82565b838281518110610b7557610b75611bda565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610bc65734838281518110610bae57610bae611bda565b60200260200101818151610bc29190611a49565b9052505b600101610b1b565b509095945050505050565b60005b818110156109be5736838383818110610bf757610bf7611bda565b9050602002810190610c099190611c09565b9050610c1b60e0820160c08301611e71565b15610c3d57610c3d610c336060830160408401611c47565b82608001356109cd565b50600101610bdc565b838383838260018114610f135760008585610c62600185611a49565b818110610c7157610c71611bda565b9050602002810190610c839190611c09565b610c94906080810190606001611c47565b9050600089815b81811015610e3f57368d8d83818110610cb657610cb6611bda565b9050602002810190610cc89190611c09565b9050610cf7610cdd6060830160408401611c47565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610d5a5750610d5a610d106040830160208401611c47565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610d715750610d71610d106020830183611c47565b8015610df65750610df6610d8860a0830183611e8c565b610d9791600491600091611ef8565b610da091611f22565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610e2c576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610e368f82611191565b50600101610c9b565b505060005b610e4f600185611a49565b811015610f0b576000888883818110610e6a57610e6a611bda565b9050602002810190610e7c9190611c09565b610e8d906080810190606001611c47565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610f0257858281518110610ed457610ed4611bda565b6020026020010151610ee582610a82565b610eef9190611a49565b92508215610f0257610f02818885610997565b50600101610e44565b505050610fec565b8760005b81811015610fe957368b8b83818110610f3257610f32611bda565b9050602002810190610f449190611c09565b9050610f59610cdd6060830160408401611c47565b80610f725750610f72610d106040830160208401611c47565b8015610f895750610f89610d106020830183611c47565b8015610fa05750610fa0610d8860a0830183611e8c565b610fd6576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610fe08d82611191565b50600101610f17565b50505b50505050505050505050565b6109be8383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff61146e565b73ffffffffffffffffffffffffffffffffffffffff8216611071576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6109be73ffffffffffffffffffffffffffffffffffffffff84168383611581565b73ffffffffffffffffffffffffffffffffffffffff82166110df576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610a5c73ffffffffffffffffffffffffffffffffffffffff8316826115d0565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c52602060006064601c6000895af13d15600160005114171661114e57637939f4246000526004601cfd5b600060605260405250505050565b6000816014526f70a0823100000000000000000000000060005260208060246010865afa601f3d111660205102905092915050565b6111a66111a16020830183611c47565b6115ec565b6111dc576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6080810135600081900361121c576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000611231610cdd6060850160408601611c47565b61123c576000611242565b82608001355b9050600061125e6112596060860160408701611c47565b610a82565b905060006112756112596080870160608801611c47565b9050826000036112ac576112ac6112926060870160408801611c47565b6112a26040880160208901611c47565b8760800135610ff8565b84608001358210156112f7576040517fcf479181000000000000000000000000000000000000000000000000000000008152608086013560048201526024810183905260440161065d565b6000806113076020880188611c47565b73ffffffffffffffffffffffffffffffffffffffff168561132b60a08a018a611e8c565b604051611339929190611f6a565b60006040518083038185875af1925050503d8060008114611376576040519150601f19603f3d011682016040523d82523d6000602084013e61137b565b606091505b50915091508161138e5761138e81611628565b60006113a361125960808a0160608b01611c47565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b38896113d460208b018b611c47565b6113e460608c0160408d01611c47565b6113f460808d0160608e01611c47565b8c608001358987116114065786611410565b6114108a88611a49565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff83166114bb576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015611530573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115549190611f7a565b101561157b5761157b73ffffffffffffffffffffffffffffffffffffffff85168483611632565b50505050565b81601452806034526fa9059cbb00000000000000000000000060005260206000604460106000875af13d1560016000511417166115c6576390b8ec186000526004601cfd5b6000603452505050565b60003860003884865af1610a5c5763b12d13eb6000526004601cfd5b6000813f7fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a47081158015906116205750808214155b949350505050565b8051602082018181fd5b81601452806034526f095ea7b300000000000000000000000060005260206000604460106000875af13d1560016000511417166115c65760006034526f095ea7b3000000000000000000000000600052600038604460106000875af1508060345260206000604460106000875af13d1560016000511417166115c657633e3f8f736000526004601cfd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff8111828210171561170f5761170f6116bc565b60405290565b600082601f83011261172657600080fd5b813567ffffffffffffffff80821115611741576117416116bc565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f01168101908282118183101715611787576117876116bc565b816040528381528660208588010111156117a057600080fd5b836020870160208301376000602085830101528094505050505092915050565b803573ffffffffffffffffffffffffffffffffffffffff811681146117e457600080fd5b919050565b803580151581146117e457600080fd5b6000610140828403121561180c57600080fd5b6118146116eb565b905081358152602082013567ffffffffffffffff8082111561183557600080fd5b61184185838601611715565b6020840152604084013591508082111561185a57600080fd5b5061186784828501611715565b604083015250611879606083016117c0565b606082015261188a608083016117c0565b608082015261189b60a083016117c0565b60a082015260c082013560c082015260e082013560e08201526101006118c28184016117e9565b908201526101206118d48382016117e9565b9082015292915050565b600061014082840312156118f157600080fd5b50919050565b6000806000806060858703121561190d57600080fd5b843567ffffffffffffffff8082111561192557600080fd5b611931888389016117f9565b9550602087013591508082111561194757600080fd5b818701915087601f83011261195b57600080fd5b81358181111561196a57600080fd5b8860208260051b850101111561197f57600080fd5b60208301955080945050604087013591508082111561199d57600080fd5b506119aa878288016118de565b91505092959194509250565b600080604083850312156119c957600080fd5b823567ffffffffffffffff808211156119e157600080fd5b6119ed868387016117f9565b93506020850135915080821115611a0357600080fd5b50611a10858286016118de565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b81810381811115610ac757610ac7611a1a565b803567ffffffffffffffff811681146117e457600080fd5b803563ffffffff811681146117e457600080fd5b60006101408236031215611a9b57600080fd5b611aa36116eb565b611aac836117c0565b8152611aba602084016117c0565b6020820152611acb604084016117c0565b604082015260608301356060820152611ae660808401611a5c565b6080820152611af760a084016117c0565b60a0820152611b0860c08401611a74565b60c0820152611b1960e08401611a74565b60e0820152610100611b2c818501611a74565b908201526101208381013567ffffffffffffffff811115611b4c57600080fd5b611b5836828701611715565b918301919091525092915050565b600060208284031215611b7857600080fd5b611b8182611a5c565b9392505050565b8082028115828204841417610ac757610ac7611a1a565b600082611bd5577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b500490565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112611c3d57600080fd5b9190910192915050565b600060208284031215611c5957600080fd5b611b81826117c0565b6000815180845260005b81811015611c8857602081850181015186830182015201611c6c565b5060006020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b73ffffffffffffffffffffffffffffffffffffffff8d811682528c811660208301528b811660408301528a81166060830152608082018a905260a0820189905260c08201889052861660e082015263ffffffff85811661010083015284811661012083015283166101408201526000610180610160830152611d4c610180830184611c62565b9e9d5050505050505050505050505050565b602081528151602082015260006020830151610140806040850152611d87610160850183611c62565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0858403016060860152611dc28382611c62565b9250506060850151611dec608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e0850151610100818187015280870151915050610120611e5f8187018315159052565b90950151151593019290925250919050565b600060208284031215611e8357600080fd5b611b81826117e9565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611ec157600080fd5b83018035915067ffffffffffffffff821115611edc57600080fd5b602001915036819003821315611ef157600080fd5b9250929050565b60008085851115611f0857600080fd5b83861115611f1557600080fd5b5050820193919092039150565b7fffffffff000000000000000000000000000000000000000000000000000000008135818116916004851015611f625780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b600060208284031215611f8c57600080fd5b505191905056fea264697066735822122022df1c24e0b309011d36b7f2a546e9b6ca5d58dd093afff5c06864723819e49a64736f6c63430008110033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_spokePool";
            readonly type: "address";
            readonly internalType: "contract IAcrossSpokePool";
        }, {
            readonly name: "_wrappedNative";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "spokePool";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IAcrossSpokePool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaAcrossV3";
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
            readonly name: "_acrossData";
            readonly type: "tuple";
            readonly internalType: "struct AcrossFacetV3.AcrossV3Data";
            readonly components: readonly [{
                readonly name: "receiverAddress";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "refundAddress";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receivingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "outputAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "outputAmountPercent";
                readonly type: "uint64";
                readonly internalType: "uint64";
            }, {
                readonly name: "exclusiveRelayer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "quoteTimestamp";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "fillDeadline";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "exclusivityDeadline";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "message";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaAcrossV3";
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
            readonly name: "_acrossData";
            readonly type: "tuple";
            readonly internalType: "struct AcrossFacetV3.AcrossV3Data";
            readonly components: readonly [{
                readonly name: "receiverAddress";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "refundAddress";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receivingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "outputAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "outputAmountPercent";
                readonly type: "uint64";
                readonly internalType: "uint64";
            }, {
                readonly name: "exclusiveRelayer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "quoteTimestamp";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "fillDeadline";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "exclusivityDeadline";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "message";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "wrappedNative";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
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
        readonly name: "InsufficientBalance";
        readonly inputs: readonly [{
            readonly name: "required";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "balance";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
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
    static createInterface(): AcrossFacetV3Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): AcrossFacetV3;
}
export {};
