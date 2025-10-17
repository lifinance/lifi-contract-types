import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { OptimismBridgeFacet, OptimismBridgeFacetInterface } from "../OptimismBridgeFacet";
type OptimismBridgeFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class OptimismBridgeFacet__factory extends ContractFactory {
    constructor(...args: OptimismBridgeFacetConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<OptimismBridgeFacet>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): OptimismBridgeFacet;
    connect(signer: Signer): OptimismBridgeFacet__factory;
    static readonly bytecode = "0x6080604052348015600e575f5ffd5b506122c38061001c5f395ff3fe60806040526004361061003e575f3560e01c80635bb5d44814610042578063899cc31714610057578063ce8a97a514610076578063decb09d714610089575b5f5ffd5b610055610050366004611ce0565b6100a8565b005b348015610062575f5ffd5b50610055610071366004611d8d565b6102d5565b610055610084366004611e0f565b610540565b348015610094575f5ffd5b506100556100a3366004611e5b565b610760565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610123576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6101333447611e92565b905086806101000151610172576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b87806101200151156101b0576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886101d38160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561020a576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f03610247576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610284576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102988a5f01518b60c001518b8b336108d4565b60c08b01526102a78a88610a16565b5047915050818111156102c8576102c85f846102c38585611e92565b610d8e565b50505f9091555050505050565b6102dd610dc3565b7f3054da8d868a64d042338c7baf39c5a0a735f3268ce50536bb45aeaa077c8ca4547f3054da8d868a64d042338c7baf39c5a0a735f3268ce50536bb45aeaa077c8ca39074010000000000000000000000000000000000000000900460ff1615610373576040517f0dc149f000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f5b838110156104a6575f85858381811061039057610390611eca565b90506040020160200160208101906103a89190611ef7565b73ffffffffffffffffffffffffffffffffffffffff16036103f5576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b84848281811061040757610407611eca565b905060400201602001602081019061041f9190611ef7565b825f87878581811061043357610433611eca565b6104499260206040909202019081019150611ef7565b73ffffffffffffffffffffffffffffffffffffffff908116825260208201929092526040015f2080547fffffffffffffffffffffffff00000000000000000000000000000000000000001692909116919091179055600101610375565b506001810180547fffffffffffffffffffffff0000000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff841617740100000000000000000000000000000000000000001790556040517fd192688003c02a257d1ee3ef083c31f3ba31e400ad8655bf4257081255c91568906105329086908690611f19565b60405180910390a150505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016105bb576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6105cb3447611e92565b9050848061010001511561060b576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8580610120015115610649576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8661066c8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156106a3576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036106e0576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361071d576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61072f88608001518960c00151610e38565b6107398888610a16565b504791505081811115610755576107555f846102c38585611e92565b50505f909155505050565b610768610dc3565b7f3054da8d868a64d042338c7baf39c5a0a735f3268ce50536bb45aeaa077c8ca4547f3054da8d868a64d042338c7baf39c5a0a735f3268ce50536bb45aeaa077c8ca39074010000000000000000000000000000000000000000900460ff166107fd576040517f87138d5c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821661084a576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8381165f818152602084815260409182902080547fffffffffffffffffffffffff0000000000000000000000000000000000000000169487169485179055905192835290917f8ba151f3405c32cff2d4c159409e00b97b0b46fbcbe59438e7f62c1283f80638910160405180910390a2505050565b5f8280820361090f576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f858561091d600185611e92565b81811061092c5761092c611eca565b905060200281019061093e9190611f9b565b61094f906080810190606001611ef7565b90505f61095b82610eec565b905073ffffffffffffffffffffffffffffffffffffffff8216610985576109823482611e92565b90505b5f6109908888610f36565b905061099c8888611040565b6109a98a898989856110ac565b5f826109b485610eec565b6109be9190611e92565b905089811015610a08576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b90526024810182905260440160405180910390fd5b9a9950505050505050505050565b608082015173ffffffffffffffffffffffffffffffffffffffff9081165f9081527f3054da8d868a64d042338c7baf39c5a0a735f3268ce50536bb45aeaa077c8ca360208190526040822054909216908115610a725781610a8e565b600183015473ffffffffffffffffffffffffffffffffffffffff165b9050610ab2856080015173ffffffffffffffffffffffffffffffffffffffff161590565b15610b865760c085015160a086015173ffffffffffffffffffffffffffffffffffffffff831691639a2ac6d591610aef6040890160208a01611fd7565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e086901b16815273ffffffffffffffffffffffffffffffffffffffff909216600483015263ffffffff166024820152606060448201525f60648201526084015f604051808303818588803b158015610b6a575f5ffd5b505af1158015610b7c573d5f5f3e3d5ffd5b5050505050610d50565b610b998560800151828760c0015161126c565b610ba96060850160408601611ffa565b15610c5b5760a085015160c08601516040517fffaad6a500000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff84169263ffaad6a592610c299260040173ffffffffffffffffffffffffffffffffffffffff929092168252602082015260400190565b5f604051808303815f87803b158015610c40575f5ffd5b505af1158015610c52573d5f5f3e3d5ffd5b50505050610d50565b608085015173ffffffffffffffffffffffffffffffffffffffff82169063838b252090610c8b6020880188611ef7565b60a089015160c08a0151610ca560408b0160208c01611fd7565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e088901b16815273ffffffffffffffffffffffffffffffffffffffff95861660048201529385166024850152939091166044830152606482015263ffffffff91909116608482015260c060a48201525f60c482015260e4015f604051808303815f87803b158015610d39575f5ffd5b505af1158015610d4b573d5f5f3e3d5ffd5b505050505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f185604051610d7f919061205f565b60405180910390a15050505050565b73ffffffffffffffffffffffffffffffffffffffff8316610db857610db38282611298565b505050565b610db3838383611305565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c6004015473ffffffffffffffffffffffffffffffffffffffff163314610e36576040517f277d76f800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b805f03610e71576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610eca5780341015610ec6576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b610ec673ffffffffffffffffffffffffffffffffffffffff8316333084611373565b5f73ffffffffffffffffffffffffffffffffffffffff821615610f2e57610f2973ffffffffffffffffffffffffffffffffffffffff8316306113cb565b610f30565b475b92915050565b6060815f8167ffffffffffffffff811115610f5357610f53611a9f565b604051908082528060200260200182016040528015610f7c578160200160208202803683370190505b5090505f5f5b8381101561103557868682818110610f9c57610f9c611eca565b9050602002810190610fae9190611f9b565b610fbf906080810190606001611ef7565b9150610fca82610eec565b838281518110610fdc57610fdc611eca565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff821661102d573483828151811061101557611015611eca565b602002602001018181516110299190611e92565b9052505b600101610f82565b509095945050505050565b5f5b81811015610db3573683838381811061105d5761105d611eca565b905060200281019061106f9190611f9b565b905061108160e0820160c08301611ffa565b156110a3576110a36110996060830160408401611ef7565b8260800135610e38565b50600101611042565b83838383825f5b8181101561125257368a8a838181106110ce576110ce611eca565b90506020028101906110e09190611f9b565b905061110f6110f56060830160408401611ef7565b73ffffffffffffffffffffffffffffffffffffffff161590565b8061117057506111706111286040830160208401611ef7565b73ffffffffffffffffffffffffffffffffffffffff165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f216020526040902054151590565b801561118757506111876111286020830183611ef7565b8015611209575061120961119e60a0830183612172565b6111ac916004915f916121da565b6111b591612201565b7fffffffff00000000000000000000000000000000000000000000000000000000165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f226020526040902054151590565b61123f576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6112498c826113fe565b506001016110b3565b5050611261848484845f611671565b505050505050505050565b610db38383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611888565b73ffffffffffffffffffffffffffffffffffffffff82166112e5576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610ec673ffffffffffffffffffffffffffffffffffffffff8316826119b5565b73ffffffffffffffffffffffffffffffffffffffff8216611352576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610db373ffffffffffffffffffffffffffffffffffffffff841683836119ce565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f511417166113be57637939f4245f526004601cfd5b5f60605260405250505050565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b61141661140e6020830183611ef7565b6017903b1190565b61144c576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f81900361148b576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f61149f6110f56060850160408601611ef7565b6114a9575f6114af565b82608001355b90505f6114ca6114c56080860160608701611ef7565b610eec565b9050815f03611500576115006114e66060860160408701611ef7565b6114f66040870160208801611ef7565b866080013561126c565b5f8061150f6020870187611ef7565b73ffffffffffffffffffffffffffffffffffffffff168461153360a0890189612172565b604051611541929190612267565b5f6040518083038185875af1925050503d805f811461157b576040519150601f19603f3d011682016040523d82523d5f602084013e611580565b606091505b5091509150816115935761159381611a17565b5f6115a76114c56080890160608a01611ef7565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b38886115d860208a018a611ef7565b6115e860608b0160408c01611ef7565b6115f860808c0160608d01611ef7565b8b6080013589871161160a5786611614565b6116148a88611e92565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b835f8682611680600182611e92565b81811061168f5761168f611eca565b90506020028101906116a19190611f9b565b6116b2906080810190606001611ef7565b90505f5f5f5f5f5f5f5b88811015611878576116cf60018a611e92565b811080156116de575088600114155b156117b9578d8d828181106116f5576116f5611eca565b90506020028101906117079190611f9b565b611718906080810190606001611ef7565b95508773ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff16146117b9578a818151811061175f5761175f611eca565b602002602001015161177087610eec565b61177a9190611e92565b965073ffffffffffffffffffffffffffffffffffffffff86161561179e575f6117a0565b895b9350838711156117b9576117b9868d6102c3878b611e92565b8d8d828181106117cb576117cb611eca565b90506020028101906117dd9190611f9b565b6117ee906060810190604001611ef7565b94506117f985610eec565b925073ffffffffffffffffffffffffffffffffffffffff85161561181d575f61181f565b895b9150818311801561185c57508773ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614155b1561187057611870858d6102c38587611e92565b6001016116bc565b5050505050505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8416156119af5773ffffffffffffffffffffffffffffffffffffffff83166118f1576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015611964573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906119889190612276565b10156119af576119af73ffffffffffffffffffffffffffffffffffffffff85168483611a21565b50505050565b5f385f3884865af1610ec65763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f51141716611a0e576390b8ec185f526004601cfd5b5f603452505050565b8051602082018181fd5b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f51141716611a0e575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f51141716611a0e57633e3f8f735f526004601cfd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff81118282101715611af057611af0611a9f565b60405290565b5f82601f830112611b05575f5ffd5b813567ffffffffffffffff811115611b1f57611b1f611a9f565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810167ffffffffffffffff81118282101715611b6c57611b6c611a9f565b604052818152838201602001851015611b83575f5ffd5b816020850160208301375f918101602001919091529392505050565b73ffffffffffffffffffffffffffffffffffffffff81168114611bc0575f5ffd5b50565b8035611bce81611b9f565b919050565b80358015158114611bce575f5ffd5b5f6101408284031215611bf3575f5ffd5b611bfb611acc565b823581529050602082013567ffffffffffffffff811115611c1a575f5ffd5b611c2684828501611af6565b602083015250604082013567ffffffffffffffff811115611c45575f5ffd5b611c5184828501611af6565b604083015250611c6360608301611bc3565b6060820152611c7460808301611bc3565b6080820152611c8560a08301611bc3565b60a082015260c0828101359082015260e08083013590820152611cab6101008301611bd3565b610100820152611cbe6101208301611bd3565b61012082015292915050565b5f60608284031215611cda575f5ffd5b50919050565b5f5f5f5f60a08587031215611cf3575f5ffd5b843567ffffffffffffffff811115611d09575f5ffd5b611d1587828801611be2565b945050602085013567ffffffffffffffff811115611d31575f5ffd5b8501601f81018713611d41575f5ffd5b803567ffffffffffffffff811115611d57575f5ffd5b8760208260051b8401011115611d6b575f5ffd5b60209190910193509150611d828660408701611cca565b905092959194509250565b5f5f5f60408486031215611d9f575f5ffd5b833567ffffffffffffffff811115611db5575f5ffd5b8401601f81018613611dc5575f5ffd5b803567ffffffffffffffff811115611ddb575f5ffd5b8660208260061b8401011115611def575f5ffd5b602091820194509250840135611e0481611b9f565b809150509250925092565b5f5f60808385031215611e20575f5ffd5b823567ffffffffffffffff811115611e36575f5ffd5b611e4285828601611be2565b925050611e528460208501611cca565b90509250929050565b5f5f60408385031215611e6c575f5ffd5b8235611e7781611b9f565b91506020830135611e8781611b9f565b809150509250929050565b81810381811115610f30577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f60208284031215611f07575f5ffd5b8135611f1281611b9f565b9392505050565b602080825281018290525f8360408301825b85811015611f91578235611f3e81611b9f565b73ffffffffffffffffffffffffffffffffffffffff1682526020830135611f6481611b9f565b73ffffffffffffffffffffffffffffffffffffffff16602083015260409283019290910190600101611f2b565b5095945050505050565b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112611fcd575f5ffd5b9190910192915050565b5f60208284031215611fe7575f5ffd5b813563ffffffff81168114611f12575f5ffd5b5f6020828403121561200a575f5ffd5b611f1282611bd3565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b60208152815160208201525f60208301516101406040840152612086610160840182612013565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08483030160608501526120c18282612013565b91505060608401516120eb608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e084015161010084015261010084015161215a61012085018215159052565b50610120840151801515610140850152509392505050565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126121a5575f5ffd5b83018035915067ffffffffffffffff8211156121bf575f5ffd5b6020019150368190038213156121d3575f5ffd5b9250929050565b5f5f858511156121e8575f5ffd5b838611156121f4575f5ffd5b5050820193919092039150565b80357fffffffff000000000000000000000000000000000000000000000000000000008116906004841015612260577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b818382375f9101908152919050565b5f60208284031215612286575f5ffd5b505191905056fea2646970667358221220b233193464239aa1fd34b8b60d4c27f4e7be0c46c4400fb93800bcccbcb1dbfd64736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "initOptimism";
        readonly inputs: readonly [{
            readonly name: "configs";
            readonly type: "tuple[]";
            readonly internalType: "struct OptimismBridgeFacet.Config[]";
            readonly components: readonly [{
                readonly name: "assetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "bridge";
                readonly type: "address";
                readonly internalType: "address";
            }];
        }, {
            readonly name: "standardBridge";
            readonly type: "address";
            readonly internalType: "contract IL1StandardBridge";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "registerOptimismBridge";
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
        readonly name: "startBridgeTokensViaOptimismBridge";
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
            readonly name: "_optimismData";
            readonly type: "tuple";
            readonly internalType: "struct OptimismBridgeFacet.OptimismData";
            readonly components: readonly [{
                readonly name: "assetIdOnL2";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "l2Gas";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "isSynthetix";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaOptimismBridge";
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
            readonly name: "_optimismData";
            readonly type: "tuple";
            readonly internalType: "struct OptimismBridgeFacet.OptimismData";
            readonly components: readonly [{
                readonly name: "assetIdOnL2";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "l2Gas";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "isSynthetix";
                readonly type: "bool";
                readonly internalType: "bool";
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
        readonly name: "OptimismBridgeRegistered";
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
        readonly name: "OptimismInitialized";
        readonly inputs: readonly [{
            readonly name: "configs";
            readonly type: "tuple[]";
            readonly indexed: false;
            readonly internalType: "struct OptimismBridgeFacet.Config[]";
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
        readonly type: "error";
        readonly name: "AlreadyInitialized";
        readonly inputs: readonly [];
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
        readonly name: "NotInitialized";
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
    static createInterface(): OptimismBridgeFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): OptimismBridgeFacet;
}
export {};
