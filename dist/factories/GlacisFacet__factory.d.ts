import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { GlacisFacet, GlacisFacetInterface } from "../GlacisFacet";
declare type GlacisFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class GlacisFacet__factory extends ContractFactory {
    constructor(...args: GlacisFacetConstructorParams);
    deploy(_airlift: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<GlacisFacet>;
    getDeployTransaction(_airlift: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): GlacisFacet;
    connect(signer: Signer): GlacisFacet__factory;
    static readonly bytecode = "0x60a060405234801561000f575f5ffd5b50604051611fc2380380611fc283398101604081905261002e91610066565b6001600160a01b038116610055576040516306b7c75960e31b815260040160405180910390fd5b6001600160a01b0316608052610093565b5f60208284031215610076575f5ffd5b81516001600160a01b038116811461008c575f5ffd5b9392505050565b608051611f0a6100b85f395f8181605d015281816106dc01526107070152611f0a5ff3fe608060405260043610610033575f3560e01c8063753cbab61461003757806382a3279b1461004c578063e10c04c1146100a8575b5f5ffd5b61004a610045366004611a13565b6100bb565b005b348015610057575f5ffd5b5061007f7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b61004a6100b6366004611a5f565b61033b565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610136576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6101463447611b0c565b90508461016b8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156101a2576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036101df576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361021c576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b858061010001511561025a576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8680610120015115610298576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b876102bb816080015173ffffffffffffffffffffffffffffffffffffffff161590565b156102f2576040517f5ded599700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61030489608001518a60c001516105c3565b61030e8989610677565b50479250505081811115610330576103305f8461032b8585611b0c565b610856565b50505f909155505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016103b6576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6103c63447611b0c565b905086806101000151610405576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8780610120015115610443576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886104668160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561049d576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036104da576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610517576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8961053a816080015173ffffffffffffffffffffffffffffffffffffffff161590565b15610571576040517f5ded599700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61058a8b5f01518c60c001518c8c338d6020013561088b565b60c08c01526105998b89610677565b504792505050818111156105b6576105b65f8461032b8585611b0c565b50505f9091555050505050565b805f036105fc576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166106555780341015610651576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b61065173ffffffffffffffffffffffffffffffffffffffff8316333084610a26565b5f6106856020830183611b44565b73ffffffffffffffffffffffffffffffffffffffff16036106d2576040517fe2fe272600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61070582608001517f00000000000000000000000000000000000000000000000000000000000000008460c00151610a7e565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166398242b3f826020013584608001518560c001518660a0015173ffffffffffffffffffffffffffffffffffffffff165f1b8760e00151875f0160208101906107849190611b44565b60405160e088901b7fffffffff0000000000000000000000000000000000000000000000000000000016815273ffffffffffffffffffffffffffffffffffffffff9586166004820152602481019490945260448401929092526064830152909116608482015260a4015f604051808303818588803b158015610804575f5ffd5b505af1158015610816573d5f5f3e3d5ffd5b50505050507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f18260405161084a9190611bb2565b60405180910390a15050565b73ffffffffffffffffffffffffffffffffffffffff83166108805761087b8282610aaa565b505050565b61087b838383610b17565b5f838082036108c6576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f86866108d4600185611b0c565b8181106108e3576108e3611cc5565b90506020028101906108f59190611cf2565b610906906080810190606001611b44565b90505f61091282610b85565b905073ffffffffffffffffffffffffffffffffffffffff821661093c576109393482611b0c565b90505b5f6109478989610bcf565b90506109538989610cd9565b604080516060810182528c815273ffffffffffffffffffffffffffffffffffffffff8916602082015290810187905261098e818b8b85610d45565b5f8361099986610b85565b6109a39190611b0c565b905073ffffffffffffffffffffffffffffffffffffffff85166109cd576109ca8882611b0c565b90505b8b811015610a16576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018d9052602481018290526044015b60405180910390fd5b9c9b505050505050505050505050565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f51141716610a7157637939f4245f526004601cfd5b5f60605260405250505050565b61087b8383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff61112d565b73ffffffffffffffffffffffffffffffffffffffff8216610af7576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61065173ffffffffffffffffffffffffffffffffffffffff83168261125a565b73ffffffffffffffffffffffffffffffffffffffff8216610b64576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61087b73ffffffffffffffffffffffffffffffffffffffff84168383611273565b5f73ffffffffffffffffffffffffffffffffffffffff821615610bc757610bc273ffffffffffffffffffffffffffffffffffffffff8316306112bc565b610bc9565b475b92915050565b6060815f8167ffffffffffffffff811115610bec57610bec6117d2565b604051908082528060200260200182016040528015610c15578160200160208202803683370190505b5090505f805b83811015610cce57868682818110610c3557610c35611cc5565b9050602002810190610c479190611cf2565b610c58906080810190606001611b44565b9150610c6382610b85565b838281518110610c7557610c75611cc5565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610cc65734838281518110610cae57610cae611cc5565b60200260200101818151610cc29190611b0c565b9052505b600101610c1b565b509095945050505050565b5f5b8181101561087b5736838383818110610cf657610cf6611cc5565b9050602002810190610d089190611cf2565b9050610d1a60e0820160c08301611d2e565b15610d3c57610d3c610d326060830160408401611b44565b82608001356105c3565b50600101610cdb565b602084015160408501518491849184908360018114611047575f8686610d6c600185611b0c565b818110610d7b57610d7b611cc5565b9050602002810190610d8d9190611cf2565b610d9e906080810190606001611b44565b90505f89815b81811015610f4757368d8d83818110610dbf57610dbf611cc5565b9050602002810190610dd19190611cf2565b9050610e00610de66060830160408401611b44565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610e625750610e62610e196040830160208401611b44565b73ffffffffffffffffffffffffffffffffffffffff165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610e795750610e79610e196020830183611b44565b8015610efc5750610efc610e9060a0830183611d47565b610e9e916004915f91611daf565b610ea791611dd6565b7fffffffff00000000000000000000000000000000000000000000000000000000165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610f32576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8e51610f3e90826112ef565b50600101610da4565b505f90505b610f57600185611b0c565b81101561103f575f898983818110610f7157610f71611cc5565b9050602002810190610f839190611cf2565b610f94906080810190606001611b44565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161461103657868281518110610fdb57610fdb611cc5565b6020026020010151610fec82610b85565b610ff69190611b0c565b92505f73ffffffffffffffffffffffffffffffffffffffff82161561101b575f61101d565b865b9050831561103457611034828a61032b8488611b0c565b505b50600101610f4c565b505050611121565b875f5b8181101561111e57368b8b8381811061106557611065611cc5565b90506020028101906110779190611cf2565b905061108c610de66060830160408401611b44565b806110a557506110a5610e196040830160208401611b44565b80156110bc57506110bc610e196020830183611b44565b80156110d357506110d3610e9060a0830183611d47565b611109576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8c5161111590826112ef565b5060010161104a565b50505b50505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8416156112545773ffffffffffffffffffffffffffffffffffffffff8316611196576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015611209573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061122d9190611e3c565b10156112545761125473ffffffffffffffffffffffffffffffffffffffff851684836115e2565b50505050565b5f385f3884865af16106515763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f511417166112b3576390b8ec185f526004601cfd5b5f603452505050565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b6113256112ff6020830183611b44565b7f91765d13665119d9c89a9e8beb9cfeb4a5a44ca96d7513e297e1357af2479ef0611660565b61135b576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f81900361139a576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6113ae610de66060850160408601611b44565b6113b8575f6113be565b82608001355b90505f6113d96113d46060860160408701611b44565b610b85565b90505f6113ef6113d46080870160608801611b44565b9050825f036114255761142561140b6060870160408801611b44565b61141b6040880160208901611b44565b8760800135610a7e565b8460800135821015611470576040517fcf4791810000000000000000000000000000000000000000000000000000000081526080860135600482015260248101839052604401610a0d565b5f8061147f6020880188611b44565b73ffffffffffffffffffffffffffffffffffffffff16856114a360a08a018a611d47565b6040516114b1929190611e53565b5f6040518083038185875af1925050503d805f81146114eb576040519150601f19603f3d011682016040523d82523d5f602084013e6114f0565b606091505b50915091508161150357611503816117c8565b5f6115176113d460808a0160608b01611b44565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388961154860208b018b611b44565b61155860608c0160408d01611b44565b61156860808d0160608e01611b44565b8c6080013589871161157a5786611584565b6115848a88611b0c565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f511417166112b3575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f511417166112b357633e3f8f735f526004601cfd5b6040805173ffffffffffffffffffffffffffffffffffffffff84811660248084019190915283518084039091018152604490920183526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167ffab46d660000000000000000000000000000000000000000000000000000000017905291515f9283928392918616916116f49190611e62565b5f60405180830381855afa9150503d805f811461172c576040519150601f19603f3d011682016040523d82523d5f602084013e611731565b606091505b5091509150818015611744575080516040145b156117be575f5f8280602001905181019061175f9190611e78565b90925090507f10ff0000000000000000000000000000000000000000000000000000000000007fffffff00000000000000000000000000000000000000000000000000000000008316016117bb573b15159350610bc992505050565b50505b505050503b151590565b8051602082018181fd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff81118282101715611823576118236117d2565b60405290565b5f82601f830112611838575f5ffd5b813567ffffffffffffffff811115611852576118526117d2565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810167ffffffffffffffff8111828210171561189f5761189f6117d2565b6040528181528382016020018510156118b6575f5ffd5b816020850160208301375f918101602001919091529392505050565b73ffffffffffffffffffffffffffffffffffffffff811681146118f3575f5ffd5b50565b8035611901816118d2565b919050565b80358015158114611901575f5ffd5b5f6101408284031215611926575f5ffd5b61192e6117ff565b823581529050602082013567ffffffffffffffff81111561194d575f5ffd5b61195984828501611829565b602083015250604082013567ffffffffffffffff811115611978575f5ffd5b61198484828501611829565b604083015250611996606083016118f6565b60608201526119a7608083016118f6565b60808201526119b860a083016118f6565b60a082015260c0828101359082015260e080830135908201526119de6101008301611906565b6101008201526119f16101208301611906565b61012082015292915050565b5f60408284031215611a0d575f5ffd5b50919050565b5f5f60608385031215611a24575f5ffd5b823567ffffffffffffffff811115611a3a575f5ffd5b611a4685828601611915565b925050611a5684602085016119fd565b90509250929050565b5f5f5f5f60808587031215611a72575f5ffd5b843567ffffffffffffffff811115611a88575f5ffd5b611a9487828801611915565b945050602085013567ffffffffffffffff811115611ab0575f5ffd5b8501601f81018713611ac0575f5ffd5b803567ffffffffffffffff811115611ad6575f5ffd5b8760208260051b8401011115611aea575f5ffd5b60209190910193509150611b0186604087016119fd565b905092959194509250565b81810381811115610bc9577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f60208284031215611b54575f5ffd5b8135611b5f816118d2565b9392505050565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b60208152815160208201525f60208301516101406040840152611bd9610160840182611b66565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0848303016060850152611c148282611b66565b9150506060840151611c3e608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e0840151610100840152610100840151611cad61012085018215159052565b50610120840151801515610140850152509392505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112611d24575f5ffd5b9190910192915050565b5f60208284031215611d3e575f5ffd5b611b5f82611906565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611d7a575f5ffd5b83018035915067ffffffffffffffff821115611d94575f5ffd5b602001915036819003821315611da8575f5ffd5b9250929050565b5f5f85851115611dbd575f5ffd5b83861115611dc9575f5ffd5b5050820193919092039150565b80357fffffffff000000000000000000000000000000000000000000000000000000008116906004841015611e35577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b5f60208284031215611e4c575f5ffd5b5051919050565b818382375f9101908152919050565b5f82518060208501845e5f920191825250919050565b5f5f60408385031215611e89575f5ffd5b82517fffffff000000000000000000000000000000000000000000000000000000000081168114611eb8575f5ffd5b6020840151909250611ec9816118d2565b80915050925092905056fea2646970667358221220e5485d8017ab3bb2d65a5afedb5969ddd3f5c7890f5336d5b95f6894fdcf2e2564736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_airlift";
            readonly type: "address";
            readonly internalType: "contract IGlacisAirlift";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "airlift";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IGlacisAirlift";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaGlacis";
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
            readonly name: "_glacisData";
            readonly type: "tuple";
            readonly internalType: "struct GlacisFacet.GlacisData";
            readonly components: readonly [{
                readonly name: "refundAddress";
                readonly type: "address";
                readonly internalType: "address";
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
        readonly name: "swapAndStartBridgeTokensViaGlacis";
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
            readonly name: "_glacisData";
            readonly type: "tuple";
            readonly internalType: "struct GlacisFacet.GlacisData";
            readonly components: readonly [{
                readonly name: "refundAddress";
                readonly type: "address";
                readonly internalType: "address";
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
        readonly name: "InvalidRefundAddress";
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
    static createInterface(): GlacisFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): GlacisFacet;
}
export {};
