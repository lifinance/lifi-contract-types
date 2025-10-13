import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { EverclearV2Facet, EverclearV2FacetInterface } from "../EverclearV2Facet";
type EverclearV2FacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class EverclearV2Facet__factory extends ContractFactory {
    constructor(...args: EverclearV2FacetConstructorParams);
    deploy(_feeAdapterV2: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<EverclearV2Facet>;
    getDeployTransaction(_feeAdapterV2: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): EverclearV2Facet;
    connect(signer: Signer): EverclearV2Facet__factory;
    static readonly bytecode = "0x60a060405234801561000f575f5ffd5b5060405161261338038061261383398101604081905261002e91610066565b6001600160a01b038116610055576040516306b7c75960e31b815260040160405180910390fd5b6001600160a01b0316608052610093565b5f60208284031215610076575f5ffd5b81516001600160a01b038116811461008c575f5ffd5b9392505050565b6080516125546100bf5f395f8181605d01528181610759015281816108a20152610b5b01526125545ff3fe608060405260043610610033575f3560e01c8063268090db146100375780634a14dde01461004c57806375b063c7146100a8575b5f5ffd5b61004a610045366004611c5e565b6100bb565b005b348015610057575f5ffd5b5061007f7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b61004a6100b6366004611d24565b610343565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610136576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6101463447611d89565b905086806101000151610185576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b87806101200151156101c3576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886101e68160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561021d576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f0361025a576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610297576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b896102ba816080015173ffffffffffffffffffffffffffffffffffffffff161590565b156102f1576040517f5ded599700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6103058b5f01518c60c001518c8c336105be565b60c08c01526103148b89610700565b50479250505081811115610336576103365f846103318585611d89565b610d29565b50505f9091555050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016103be576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6103ce3447611d89565b9050846103f38160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561042a576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f03610467576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036104a4576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b85806101000151156104e2576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8680610120015115610520576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b87610543816080015173ffffffffffffffffffffffffffffffffffffffff161590565b1561057a576040517f5ded599700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61058c89608001518a60c00151610d5e565b6105968989610700565b504792505050818111156105b3576105b35f846103318585611d89565b50505f909155505050565b5f828082036105f9576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f8585610607600185611d89565b81811061061657610616611dc1565b90506020028101906106289190611dee565b610639906080810190606001611e2a565b90505f61064582610e12565b905073ffffffffffffffffffffffffffffffffffffffff821661066f5761066c3482611d89565b90505b5f61067a8888610e5c565b90506106868888610f66565b6106938a89898985610fd2565b5f8261069e85610e12565b6106a89190611d89565b9050898110156106f2576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b90526024810182905260440160405180910390fd5b9a9950505050505050505050565b6040810135158061071857508060c001358260c00151105b1561074f576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61078282608001517f00000000000000000000000000000000000000000000000000000000000000008460c00151611194565b7311f111f111f111f111f111f111f111f111f111f173ffffffffffffffffffffffffffffffffffffffff168260a0015173ffffffffffffffffffffffffffffffffffffffff1603610a71578035610805576040517f58b0510000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040805160018082528183019092525f9160208083019080368337019050509050660416edef1601be8360e001510361086e5763536f6c4d815f8151811061084f5761084f611dc1565b602002602001019063ffffffff16908163ffffffff16815250506108a0565b6040517f3ea0d59500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663ae9b2bad836020013583855f0135876080015187604001358860c001358a60c001516109049190611d89565b60608a013561091960a08c0160808d01611e60565b61092660a08d018d611e7b565b60405180606001604052808f60c0013581526020018f60e0013581526020018f8061010001906109569190611e7b565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284375f9201919091525050509152506040517fffffffff0000000000000000000000000000000000000000000000000000000060e08e901b1681526109cd9a99989796959493929190600401611fe6565b5f6040518083038185885af11580156109e8573d5f5f3e3d5ffd5b50505050506040513d5f823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610a2e919081019061217e565b505060e08301518351604051843581527f815cd8dc72093a13fe3577112c391b6279303956526382ab98772d0239dbf78c9060200160405180910390a350610cee565b60a082015173ffffffffffffffffffffffffffffffffffffffff16813514610ac5576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040805160018082528183019092525f916020808301908036833750505060e084015190915063ffffffff1015610b28576040517f3ea0d59500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8260e00151815f81518110610b3f57610b3f611dc1565b602002602001019063ffffffff16908163ffffffff16815250507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663ceb6341c8360200135838660a00151876080015187604001355f1c8860c001358a60c00151610bc09190611d89565b60608a0135610bd560a08c0160808d01611e60565b610be260a08d018d611e7b565b60405180606001604052808f60c0013581526020018f60e0013581526020018f806101000190610c129190611e7b565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284375f9201919091525050509152506040517fffffffff0000000000000000000000000000000000000000000000000000000060e08e901b168152610c899a999897969594939291906004016122aa565b5f6040518083038185885af1158015610ca4573d5f5f3e3d5ffd5b50505050506040513d5f823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610cea919081019061217e565b5050505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f182604051610d1d919061233f565b60405180910390a15050565b73ffffffffffffffffffffffffffffffffffffffff8316610d5357610d4e82826111c0565b505050565b610d4e83838361122d565b805f03610d97576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610df05780341015610dec576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b610dec73ffffffffffffffffffffffffffffffffffffffff831633308461129b565b5f73ffffffffffffffffffffffffffffffffffffffff821615610e5457610e4f73ffffffffffffffffffffffffffffffffffffffff8316306112f3565b610e56565b475b92915050565b6060815f8167ffffffffffffffff811115610e7957610e796119c7565b604051908082528060200260200182016040528015610ea2578160200160208202803683370190505b5090505f5f5b83811015610f5b57868682818110610ec257610ec2611dc1565b9050602002810190610ed49190611dee565b610ee5906080810190606001611e2a565b9150610ef082610e12565b838281518110610f0257610f02611dc1565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610f535734838281518110610f3b57610f3b611dc1565b60200260200101818151610f4f9190611d89565b9052505b600101610ea8565b509095945050505050565b5f5b81811015610d4e5736838383818110610f8357610f83611dc1565b9050602002810190610f959190611dee565b9050610fa760e0820160c08301612452565b15610fc957610fc9610fbf6060830160408401611e2a565b8260800135610d5e565b50600101610f68565b83838383825f5b8181101561117a57368a8a83818110610ff457610ff4611dc1565b90506020028101906110069190611dee565b905061103561101b6060830160408401611e2a565b73ffffffffffffffffffffffffffffffffffffffff161590565b80611097575061109761104e6040830160208401611e2a565b73ffffffffffffffffffffffffffffffffffffffff165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b80156110ae57506110ae61104e6020830183611e2a565b801561113157506111316110c560a0830183611e7b565b6110d3916004915f9161246b565b6110dc91612492565b7fffffffff00000000000000000000000000000000000000000000000000000000165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b611167576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6111718c82611326565b50600101610fd9565b5050611189848484845f611599565b505050505050505050565b610d4e8383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6117b0565b73ffffffffffffffffffffffffffffffffffffffff821661120d576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610dec73ffffffffffffffffffffffffffffffffffffffff8316826118dd565b73ffffffffffffffffffffffffffffffffffffffff821661127a576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610d4e73ffffffffffffffffffffffffffffffffffffffff841683836118f6565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f511417166112e657637939f4245f526004601cfd5b5f60605260405250505050565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b61133e6113366020830183611e2a565b6017903b1190565b611374576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f8190036113b3576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6113c761101b6060850160408601611e2a565b6113d1575f6113d7565b82608001355b90505f6113f26113ed6080860160608701611e2a565b610e12565b9050815f036114285761142861140e6060860160408701611e2a565b61141e6040870160208801611e2a565b8660800135611194565b5f806114376020870187611e2a565b73ffffffffffffffffffffffffffffffffffffffff168461145b60a0890189611e7b565b6040516114699291906124f8565b5f6040518083038185875af1925050503d805f81146114a3576040519150601f19603f3d011682016040523d82523d5f602084013e6114a8565b606091505b5091509150816114bb576114bb8161193f565b5f6114cf6113ed6080890160608a01611e2a565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388861150060208a018a611e2a565b61151060608b0160408c01611e2a565b61152060808c0160608d01611e2a565b8b60800135898711611532578661153c565b61153c8a88611d89565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b835f86826115a8600182611d89565b8181106115b7576115b7611dc1565b90506020028101906115c99190611dee565b6115da906080810190606001611e2a565b90505f5f5f5f5f5f5f5b888110156117a0576115f760018a611d89565b81108015611606575088600114155b156116e1578d8d8281811061161d5761161d611dc1565b905060200281019061162f9190611dee565b611640906080810190606001611e2a565b95508773ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff16146116e1578a818151811061168757611687611dc1565b602002602001015161169887610e12565b6116a29190611d89565b965073ffffffffffffffffffffffffffffffffffffffff8616156116c6575f6116c8565b895b9350838711156116e1576116e1868d610331878b611d89565b8d8d828181106116f3576116f3611dc1565b90506020028101906117059190611dee565b611716906060810190604001611e2a565b945061172185610e12565b925073ffffffffffffffffffffffffffffffffffffffff851615611745575f611747565b895b9150818311801561178457508773ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614155b1561179857611798858d6103318587611d89565b6001016115e4565b5050505050505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8416156118d75773ffffffffffffffffffffffffffffffffffffffff8316611819576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa15801561188c573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906118b09190612507565b10156118d7576118d773ffffffffffffffffffffffffffffffffffffffff85168483611949565b50505050565b5f385f3884865af1610dec5763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f51141716611936576390b8ec185f526004601cfd5b5f603452505050565b8051602082018181fd5b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f51141716611936575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f5114171661193657633e3f8f735f526004601cfd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff81118282101715611a1857611a186119c7565b60405290565b604051610180810167ffffffffffffffff81118282101715611a1857611a186119c7565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715611a8957611a896119c7565b604052919050565b5f67ffffffffffffffff821115611aaa57611aaa6119c7565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b5f82601f830112611ae5575f5ffd5b8135611af8611af382611a91565b611a42565b818152846020838601011115611b0c575f5ffd5b816020850160208301375f918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff81168114611b4b575f5ffd5b919050565b80358015158114611b4b575f5ffd5b5f6101408284031215611b70575f5ffd5b611b786119f4565b823581529050602082013567ffffffffffffffff811115611b97575f5ffd5b611ba384828501611ad6565b602083015250604082013567ffffffffffffffff811115611bc2575f5ffd5b611bce84828501611ad6565b604083015250611be060608301611b28565b6060820152611bf160808301611b28565b6080820152611c0260a08301611b28565b60a082015260c0828101359082015260e08083013590820152611c286101008301611b50565b610100820152611c3b6101208301611b50565b61012082015292915050565b5f6101208284031215611c58575f5ffd5b50919050565b5f5f5f5f60608587031215611c71575f5ffd5b843567ffffffffffffffff811115611c87575f5ffd5b611c9387828801611b5f565b945050602085013567ffffffffffffffff811115611caf575f5ffd5b8501601f81018713611cbf575f5ffd5b803567ffffffffffffffff811115611cd5575f5ffd5b8760208260051b8401011115611ce9575f5ffd5b60209190910193509150604085013567ffffffffffffffff811115611d0c575f5ffd5b611d1887828801611c47565b91505092959194509250565b5f5f60408385031215611d35575f5ffd5b823567ffffffffffffffff811115611d4b575f5ffd5b611d5785828601611b5f565b925050602083013567ffffffffffffffff811115611d73575f5ffd5b611d7f85828601611c47565b9150509250929050565b81810381811115610e56577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112611e20575f5ffd5b9190910192915050565b5f60208284031215611e3a575f5ffd5b611e4382611b28565b9392505050565b65ffffffffffff81168114611e5d575f5ffd5b50565b5f60208284031215611e70575f5ffd5b8135611e4381611e4a565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611eae575f5ffd5b83018035915067ffffffffffffffff821115611ec8575f5ffd5b602001915036819003821315611edc575f5ffd5b9250929050565b5f8151808452602084019350602083015f5b82811015611f1957815163ffffffff16865260209586019590910190600101611ef5565b5093949350505050565b81835281816020850137505f602082840101525f60207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b80518252602081015160208301525f604082015160606040850152611fde6060850182611f6a565b949350505050565b61012081525f611ffa61012083018d611ee3565b8b602084015273ffffffffffffffffffffffffffffffffffffffff8b1660408401528960608401528860808401528760a084015265ffffffffffff871660c084015282810360e084015261204f818688611f23565b90508281036101008401526120648185611fb6565b9d9c50505050505050505050505050565b805163ffffffff81168114611b4b575f5ffd5b805167ffffffffffffffff81168114611b4b575f5ffd5b8051611b4b81611e4a565b5f82601f8301126120b9575f5ffd5b815167ffffffffffffffff8111156120d3576120d36119c7565b8060051b6120e360208201611a42565b918252602081850181019290810190868411156120fe575f5ffd5b6020860192505b838310156121275761211683612075565b825260209283019290910190612105565b9695505050505050565b5f82601f830112612140575f5ffd5b815161214e611af382611a91565b818152846020838601011115612162575f5ffd5b8160208501602083015e5f918101602001919091529392505050565b5f5f6040838503121561218f575f5ffd5b8251602084015190925067ffffffffffffffff8111156121ad575f5ffd5b830161018081860312156121bf575f5ffd5b6121c7611a1e565b81518152602080830151908201526040808301519082015260608083015190820152608080830151908201526121ff60a08301612075565b60a082015261221060c08301612088565b60c082015261222160e0830161209f565b60e0820152612233610100830161209f565b610100820152610120828101519082015261014082015167ffffffffffffffff81111561225e575f5ffd5b61226a878285016120aa565b6101408301525061016082015167ffffffffffffffff81111561228b575f5ffd5b61229787828501612131565b6101608301525080925050509250929050565b61012081525f6122be61012083018d611ee3565b73ffffffffffffffffffffffffffffffffffffffff8c16602084015273ffffffffffffffffffffffffffffffffffffffff8b16604084015273ffffffffffffffffffffffffffffffffffffffff8a1660608401528860808401528760a084015265ffffffffffff871660c084015282810360e084015261204f818688611f23565b60208152815160208201525f60208301516101406040840152612366610160840182611f6a565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08483030160608501526123a18282611f6a565b91505060608401516123cb608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e084015161010084015261010084015161243a61012085018215159052565b50610120840151801515610140850152509392505050565b5f60208284031215612462575f5ffd5b611e4382611b50565b5f5f85851115612479575f5ffd5b83861115612485575f5ffd5b5050820193919092039150565b80357fffffffff0000000000000000000000000000000000000000000000000000000081169060048410156124f1577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b818382375f9101908152919050565b5f60208284031215612517575f5ffd5b505191905056fea264697066735822122031d92e0dd571330a475cfa20f6d0f23cbdac4c07cc02005b0f0b2f4787ef323b64736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_feeAdapterV2";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "FEE_ADAPTER_V2";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IEverclearFeeAdapterV2";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaEverclear";
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
            readonly name: "_everclearData";
            readonly type: "tuple";
            readonly internalType: "struct EverclearV2Facet.EverclearData";
            readonly components: readonly [{
                readonly name: "receiverAddress";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "nativeFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "outputAsset";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "amountOutMin";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "ttl";
                readonly type: "uint48";
                readonly internalType: "uint48";
            }, {
                readonly name: "data";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "fee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "deadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "sig";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaEverclear";
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
            readonly name: "_everclearData";
            readonly type: "tuple";
            readonly internalType: "struct EverclearV2Facet.EverclearData";
            readonly components: readonly [{
                readonly name: "receiverAddress";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "nativeFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "outputAsset";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "amountOutMin";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "ttl";
                readonly type: "uint48";
                readonly internalType: "uint48";
            }, {
                readonly name: "data";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "fee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "deadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "sig";
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
    }, {
        readonly type: "error";
        readonly name: "UnsupportedEverclearChainId";
        readonly inputs: readonly [];
    }];
    static createInterface(): EverclearV2FacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): EverclearV2Facet;
}
export {};
